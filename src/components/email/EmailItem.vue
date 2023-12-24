<template>
    <div
        class="email-item"
        style="gap: 20px; padding: 20px; border-bottom: 1px solid gray"
    >
        <div
            style="
                display: flex;
                align-items: center;
                height: 50px;
                width: 20px;
            "
        >
            <label class="checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="flex" style="gap: 20px">
            <div
                @click="changeActive"
                style="
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                "
                :style="
                    isActive
                        ? 'background-color: #f9efd7'
                        : 'background-color: #f5f5f5'
                "
            >
                <img
                    class=""
                    style="width: 25px; height: 25px"
                    :src="
                        isActive
                            ? require('@/assets/star.svg')
                            : require('@/assets/star-gray.svg')
                    "
                    alt="star"
                />
            </div>
            <img class="avatar" :src="email.avatar" alt="Sender's Avatar" />
        </div>
        <div class="main-box-email" style="width: 600px">
            <div class="flex" style="gap: 10px">
                <div class="email">{{ email.address }}</div>
                <div class="email-time">{{ email.timeAgo }}</div>
            </div>

            <div class="email-content" style="font-weight: 600">
                <div class="subject">{{ email.subject }}</div>
            </div>
            <div style="font-size: 12px">
                <div class="preview">{{ email.preview }}</div>
            </div>
            <div class="attachments">
                <div
                    class="attachment"
                    v-for="file in email.attachments.slice(0, 2)"
                    :key="file.name"
                >
                    <img
                        :src="getIconForFileType(file.type)"
                        :alt="file.name"
                    />
                    <div class="filename">{{ file.name }}</div>
                </div>
                <div
                    v-if="email.attachments.length > 2"
                    class="more-files attachment"
                >
                    {{ email.attachments.length - 2 }} files more
                </div>
            </div>
        </div>
        <div
            style="
                display: flex;
                flex-direction: column;
                align-items: end;
                gap: 40px;
            "
        >
            <img
                :src="require('@/assets/dots.svg')"
                style="transform: rotate(90deg)"
                alt=""
            />
            <div class="flex" style="gap: 10px; align-items: center">
                <img
                    style="
                        padding: 8px;
                        background-color: #fbeeeb;
                        width: 40px;
                        height: 40px;
                    "
                    :src="require('@/assets/print.svg')"
                    alt=""
                />
                <img :src="require('@/assets/time.svg')" alt="" />
                <img :src="require('@/assets/attach.svg')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmailItem",
    props: {
        email: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isActive: true,
        };
    },
    computed: {},
    methods: {
        getIconForFileType(fileType) {
            if (fileType == "fig") {
                return require("@/assets/gallery.svg");
            }
            return require("@/assets/file.svg");
        },
        changeActive() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped>
.email-item {
    display: flex;
}

.main-box-email {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.sender-info {
    display: flex;
    align-items: center;
    /* Add styles here to match the design from your image */
}

.avatar {
    width: 50px;
    height: 50px;
    /* Add styles here to match the design from your image */
}

.meta-info {
    display: flex;
    flex-direction: column;
    /* Add styles here to match the design from your image */
}

.star-icon {
    /* Add styles here to use an actual icon instead of a character */
}

.email {
    color: #bcb4c4;
    font-size: 12px;
}

.email-time {
    color: #bcb4c4;
    font-size: 12px;
    /* Add styles here to match the design from your image */
}

.email-content {
    /* Add styles here to match the design from your image */
}

.attachments {
    display: flex;
    gap: 20px;
    color: #ef6e4d;
    font-size: 12px;
    /* Add styles here to match the design from your image */
}

.attachment {
    display: flex;
    align-items: center;
    border: 1px solid #f0edec;
    padding: 10px 20px;
    gap: 10px;
    /* Add styles here to match the design from your image */
}

.filename {
    /* Add styles here to match the design from your image */
}

.more-files {
    background-color: #fbeeeb;
}

.checkbox input {
    height: 0;
    width: 0;
}
.checkbox {
    display: block;
    position: relative;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 2px solid #c9c9c9;
    cursor: pointer;
}
.checkbox:hover input ~ .checkmark {
    background-color: transparent;
}
.checkbox input:checked ~ .checkmark {
    background-color: #ef6e4d;
    border-color: #ef6e4d;
}
.checkbox .checkmark:after {
    width: 100%;
    height: 100%;
    color: white;
    justify-content: center;
    align-items: center;
}
.checkbox input:checked ~ .checkmark:after {
    display: block;
}

.checkmark:after {
    content: "✓";
    display: flex;
    position: absolute;
    top: -3px;
    left: 2px;
}
</style>
