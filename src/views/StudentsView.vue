<template>
    <div>
        <h1>Estudiantes</h1>
        <section>
            <ul>
                <li v-for="(student, index) in studentsStore.students" :key="index">
                    <RouterLink :to="{
                        name: 'student', 
                        params: {id: student.id}
                    }">
                    <h3> {{ student.name }}</h3>
                    <br><br>
                    {{ index + 1 }} | {{ student.email }}
                    </RouterLink>
                    <button @click="deleteStudent(student.id)">Eliminar</button>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useStudentStore } from '@/stores/students'
import { onMounted } from 'vue';

const studentsStore = useStudentStore()

onMounted(async () => {
    await studentsStore.fetchStudents()
})

async function deleteStudent(id: number) {
    await studentsStore.deleteStudent(id)
    await studentsStore.fetchStudents()
    alert('Alumno eliminado!')
}

</script>

<style>

div {
    padding: 20px;
    background-color: #f0f0f0;
}

h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li a {
    text-decoration: none;
    color: #007bff; 
}

button {
    background-color: #dc3545; 
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #c82333; 
}

</style>