import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type IStudents from '@/interfaces/IStudents'
import UsersService from '@/services/UsersService'

export const useStudentStore = defineStore('students', () => {
    const students = ref<IStudents[]>([])
    const student = ref<IStudents>()
    const service = new UsersService()

    async function fetchStudents () {
        try {   
            await service.fetchAll()
            students.value = service.getStudents().value
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchStudent (id: number) {
        try {
            await service.fetchStudent(id)
            student.value = service.getStudent().value
        } catch (error) {
            console.log(error)
        }
    }
    
    async function createStudent(email: string, name: string, group: string) {
        await service.createStudent(email, name, group)
        students.value = service.getStudents().value
    }

    async function deleteStudent (id: number) {
        await service.deleteStudent(id)
        students.value = service.getStudents().value
    }

    return { students, student, fetchStudents, fetchStudent, createStudent, deleteStudent }
})
