export type APIResponse<T> = {
    success: boolean
    heading: string
    message: string
    data: T
}