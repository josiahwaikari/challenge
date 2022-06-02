import { createQueryParams } from "../helpers";

type Response = {
  records: {
    id: string;
    fields: {
      Name: string;
      Classes: string[];
      Students: string[];
    };
  }[];
};

const airtableBaseFetch = async <T>(
  baseUrl: string,
  base: string,
  params: any = {},
  headers: any = {}
): Promise<T> => {
  const headerOptions = {
    "Content-Type": "application/json",
    Authorization: `Bearer keyHsMAMqWzs12X5x`,
    ...headers,
  };

  const response = await fetch(
    `${baseUrl}/${base}?${createQueryParams(params)}`,
    {
      method: "GET",
      headers: headerOptions,
    }
  );
  const json = await response.json();
  return json;
};

class AirtableService {
  private readonly _base: string =
    "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0";

  async getStudent(studentName: string) {
    const {
      records: [student],
    } = await airtableBaseFetch<Response>(this._base, "Students", {
      view: "Grid view",
      maxRecords: 1,
      filterByFormula: `Name="${studentName}"`,
    });
    const classrooms = await this.getClasses(student.fields.Classes);

    return {
      id: student.id,
      name: student.fields.Name,
      classrooms,
    };
  }

  async getClasses(classIds: string[]) {
    const { records: classrooms } = await airtableBaseFetch<Response>(
      this._base,
      "Classes",
      {
        view: "Grid view",
        maxRecords: 100,
        filterByFormula: `OR(${classIds.map(
          (classId) => `RECORD_ID()="${classId}"`
        )})`,
      }
    );
    const studentIds: string[] = classrooms.reduce(
      (acc: any, classroom) => [...acc, ...classroom.fields.Students],
      []
    );
    const uniqueStudentIds = new Set(studentIds);
    const studentIdsArray = Array.from(uniqueStudentIds);

    const studentNamesWithIds = await this.getStudentsForClasses(
      studentIdsArray
    );

    return classrooms.map((classroom: any) => ({
      id: classroom.id,
      name: classroom.fields.Name,
      students: studentNamesWithIds.filter((student: any) =>
        classroom.fields.Students.includes(student.id)
      ),
    }));
  }

  async getStudentsForClasses(studentIds: string[]) {
    const { records: students } = await airtableBaseFetch<Response>(
      this._base,
      "Students",
      {
        view: "Grid view",
        maxRecords: 100,
        filterByFormula: `OR(${studentIds.map(
          (studentId) => `RECORD_ID()="${studentId}"`
        )})`,
      }
    );

    return students.map((student: any) => ({
      id: student.id,
      name: student.fields.Name,
    }));
  }
}

const airtableService = new AirtableService();
export default airtableService;
