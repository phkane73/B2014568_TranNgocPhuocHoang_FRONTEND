<template>
    <div class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm :contact="{ contact }" @submit:contact="createContact"></ContactForm>
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            contact: {
                "name": "",
                "address": "",
                "phone": "",
                "email": "",
                "favorite": "",
            },
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            await ContactService.create(data).then((res) => {
                this.message = "Thêm liên hệ thành công";
            }
            )
        }
    },
    created() {
        this.message = "";
    },
};
</script>