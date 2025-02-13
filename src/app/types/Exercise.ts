
export interface Exercise {
    id: number;
    personal_record_set: boolean;
    personal_record_weight: number;
    personal_record_legacy: number
    workout_date_time_completed: Date;
    workout_date_time_submission: Date;
    workout_focus: string;
    workout_type: string;
    number_of_sets: number;
    number_of_reps: number[];
}