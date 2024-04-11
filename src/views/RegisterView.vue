<template>
    <div>
        <h1>Registrar estudiante</h1>
        <form @submit="send">
            <input type="text" placeholder="Nombre del estudiante" v-model="name">
            <br><br>
            <input type="email" placeholder="Email" v-model="email">
            <br><br>
            <input type="text" placeholder="Grupo" v-model="group">
            <br><br>
            <button class="submit">Agregar alumno</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useStudentStore } from '@/stores/students';
import { ref } from 'vue';

const service = useStudentStore()

const name = ref('')
const email = ref('')
const group = ref('')

const send = async (e: any) => {
    e.preventDefault()

    if(!name.value || !email.value || !group.value){
        alert("Por favor, llena todos los campos")
        return
    }

    if (!/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(email.value)) {
        alert("Por favor, ingresa un email válido");
        return
    }

    let student = {
        name: name.value,
        email: email.value,
        group: group.value
    }

    service.createStudent(student.name, student.email, student.group)
    return alert("registro completado")
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

form {
    max-width: 400px;
    margin: 0 auto;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button.submit {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button.submit:hover {
    background-color: #0056b3;
}

</style>