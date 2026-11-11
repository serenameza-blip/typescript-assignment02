// Problem 3
import { Professor, Class, Student } from "../types";
import { arrayOfStudents } from "./Problem2";

// Function that returns the names of all students a professor teaches in increasing order by age
export function studentsTaughtByProf(professor: Professor): string[] {
    // TODO: Implement logic to collect and sort students by age
    // COLLECT
    const studentFinder = new Map<string, number>();
    for (const c of professor.classes) {
        for (const student of c.students) {
            studentFinder.set(student.name, student.age);
        }
    }

    // SORT
    return Array.from(studentFinder.keys()).sort((a: string, b: string) => (studentFinder.get(a)! - studentFinder.get(b)!));
}

export default studentsTaughtByProf;