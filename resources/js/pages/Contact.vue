<template>
    <div>
        <h3 class="text-center">All Books</h3><br/>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="contact in contacts" :key="contact.id">
                <td>{{ contact.id }}</td>
                <td>{{ contact.name }}</td>
                <td>{{ contact.author }}</td>
                <td>{{ contact.created_at }}</td>
                <td>{{ contact.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: contact.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <!-- <button class="btn btn-danger" @click="deleteBook(contact.id)">Delete</button> -->
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contacts: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/contact')
                .then(response => {
                    this.contact = response.data;
                });
        }
        // methods: {
        //     deleteBook(id) {
        //         this.axios
        //             .delete(`http://localhost:8000/api/book/delete/${id}`)
        //             .then(response => {
        //                 let i = this.books.map(item => item.id).indexOf(id); // find index of your object
        //                 this.books.splice(i, 1)
        //             });
        //     }
        // }
    }
</script>