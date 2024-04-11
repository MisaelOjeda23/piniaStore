<template>
    <div>
        <h1>Estudiante {{ stu?.name }}</h1>
        <div>
            id: {{ student.student?.id }}
            <br><br>
            email: {{ student.student?.email }}
            <br><br>
            grupo: {{ student.student?.group }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStudentStore } from '@/stores/students';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const student = useStudentStore()
const stu = ref(student.student)

onMounted (async () => {
    const router = useRoute()
    const studentId = Number(router.params.id)
    await student.fetchStudent(studentId)
})

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

div {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

div > span {
    display: block;
    margin-bottom: 10px;
}

h1 {
    font-size: 20px;
    margin-bottom: 10px;
}

div > span:nth-child(n+2) {
    font-size: 16px;
    color: #666;
}

</style>