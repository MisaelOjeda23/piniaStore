import type IStudents from "@/interfaces/IStudents";
import type { Ref } from "vue";
import { ref } from "vue";

const url = "https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api/Alumnos"

export default class UsersService {
    private students: Ref<IStudents[]> 
    private student: Ref<IStudents>
    
    constructor () {
        this.students = ref([])
        this.student = ref({}) as Ref<IStudents>
    }

    getStudents () {
        return this.students
    }

    getStudent () {
        return this.student
    }

    async fetchAll (): Promise<void> {
        try {
            const json = await fetch(url)
            const response = await json.json()
            this.students.value = await response
        } catch (error) {
            console.log(error)
        }
    }

    async fetchStudent (id: number): Promise<void> {
        try {
            const json = await fetch(url + '/' + id)
            const response = await json.json()
            this.student.value = await response
        } catch (error) {
            console.log(error)
        }
    }

    async createStudent (name: string, email: string, group: string) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": '*'
                },
                body: JSON.stringify({name, email, group})
            })
            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteStudent(id: number): Promise<void> {
        try {
            const respose = await fetch(url + '/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            const result = await respose.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}