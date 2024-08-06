import { Subject } from "./subject.model";

export interface Student {
    studentId?: number;
    name: string;
    subjects?: Subject[];
  }