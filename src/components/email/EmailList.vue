<template>
    <div class="email-list">
        <EmailItem v-for="email in emails" :key="email.id" :email="email" />
    </div>
</template>

<script>
import EmailItem from "./EmailItem.vue";

export default {
    name: "EmailList",
    components: {
        EmailItem,
    },
    data() {
        return {
            emails: [
                {
                    id: 1,
                    name: "Kevin Hart",
                    address: "kevinhart@mail.com",
                    avatar: "https://zvukobook.ru/800/600/https/www.ntc-profit.ru/wp-content/uploads/2019/06/1s-soprovozhdenie.jpg",
                    subject: "How to manage your working time in this pandemic",
                    preview:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
                    timeAgo: "24 min ago",
                    attachments: [
                        {
                            name: "Master_file.fig",
                            type: "fig",
                        },
                        {
                            name: "CoverPreview.jpg",
                            type: "jpg",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Kevin Hart",
                    address: "kevinhart@mail.com",
                    avatar: "https://zvukobook.ru/800/600/https/www.ntc-profit.ru/wp-content/uploads/2019/06/1s-soprovozhdenie.jpg",
                    subject: "How to manage your working time in this pandemic",
                    preview:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
                    timeAgo: "24 min ago",
                    attachments: [
                        {
                            name: "Master_file.fig",
                            type: "fig",
                        },
                        {
                            name: "CoverPreview.jpg",
                            type: "jpg",
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Kevin Hart",
                    address: "kevinhart@mail.com",
                    avatar: "https://zvukobook.ru/800/600/https/www.ntc-profit.ru/wp-content/uploads/2019/06/1s-soprovozhdenie.jpg",
                    subject: "How to manage your working time in this pandemic",
                    preview:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
                    timeAgo: "24 min ago",
                    attachments: [
                        {
                            name: "Master_file.fig",
                            type: "fig",
                        },
                        {
                            name: "CoverPreview.jpg",
                            type: "jpg",
                        },
                        {
                            name: "CoverPreview.jpg",
                            type: "jpg",
                        },
                        {
                            name: "CoverPreview.jpg",
                            type: "jpg",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style>
.email-list {
}
</style>
