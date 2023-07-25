import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://kcviwsthhzqxbbaxvfrw.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjdml3c3RoaHpxeGJiYXh2ZnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyNDA5NzksImV4cCI6MjAwNTgxNjk3OX0.SyxbuasRVrSYlnhXeYxC3cQLov-uD1VRIY8qQ0izZtI",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjdml3c3RoaHpxeGJiYXh2ZnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyNDA5NzksImV4cCI6MjAwNTgxNjk3OX0.SyxbuasRVrSYlnhXeYxC3cQLov-uD1VRIY8qQ0izZtI"
    }
})