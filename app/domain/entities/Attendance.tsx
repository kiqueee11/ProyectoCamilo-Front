export interface Attendance{
    id: number
    attendance: boolean
    user: UserAttendance
}

export interface CreateUpdateAttendance{
    attendance: boolean
    user: string
    event: string
    update?: boolean
}

export interface UserAttendance{
    id: number
    name: string
}

export interface AttendanceStadistics{
    registered: number,
    attenders: number,
    missing: number
}