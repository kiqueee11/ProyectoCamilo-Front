export interface Attendance{
    id: number
    attendance: boolean
    user: UserAttendance
}

export interface UserAttendance{
    id: number
    name: string
}