<template>
    <div class="item">
        <div
            style="
                display: flex;
                align-items: center;
                height: 50px;
                width: 20px;
            "
        >
            <label class="checkbox">
                <input
                    type="checkbox"
                    :checked="isChecked"
                    @change="toggleCheck"
                />
                <span class="checkmark"></span>
            </label>
        </div>
        <div style="font-weight: bold">{{ invoice.id }}</div>
        <div style="font-size: 12px; color: #d2cfd8">{{ invoice.date }}</div>
        <div>
            <div style="font-size: 14px; font-weight: 700; padding-bottom: 5px">
                {{ invoice.client }}
            </div>
            <div style="font-size: 12px; color: #d2cfd8">Creative agency</div>
        </div>
        <div
            style="
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 10px;
            "
        >
            <img
                style="
                    padding: 5px;
                    background-color: #fbeeeb;
                    width: 30px;
                    height: 30px;
                    border-radius: 10px;
                "
                :src="require('@/assets/email.svg')"
                alt=""
            />
            {{ invoice.contact }}
        </div>
        <div style="color: #f17b50; font-weight: 700">{{ invoice.amount }}</div>
        <div class="status" :class="getStatusClass(invoice.status)">
            {{ invoice.status }}
        </div>
        <img
            :src="require('@/assets/dots.svg')"
            style="transform: rotate(90deg); cursor: pointer"
            alt=""
        />
    </div>
</template>

<script>
export default {
    props: {
        invoice: {
            type: Object,
            required: true,
        },
        allChecked: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isChecked: this.allChecked,
        };
    },
    methods: {
        toggleCheck() {
            this.isChecked = !this.isChecked;

            this.$emit("check-change", {
                id: this.invoice.id,
                checked: this.isChecked,
            });
        },
        getStatusClass(status) {
            return status?.toLowerCase();
        },
    },
    watch: {
        allChecked(newVal) {
            this.isChecked = newVal;
        },
    },
};
</script>

<style scoped>
.item > div:nth-child(2) {
    width: 120px;
}
.item > div:nth-child(3) {
    width: 140px;
}
.item > div:nth-child(4) {
    width: 140px;
}
.item > div:nth-child(5) {
    width: 200px;
}
.item > div:nth-child(6) {
    width: 110px;
}
.item {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    gap: 20px;
    padding: 5px 20px;
}

.status {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    width: 120px;
    height: 40px;
    font-weight: 600;
    font-size: 12px;
}

.completed {
    background-color: #eaf6f2;
    color: #4ebc9b;
}
.completed::before {
    content: "✓";
}
.pending {
    background-color: #fcf0ea;
    color: #f07959;
}
.pending::before {
    content: "?";
}
.unpaid {
    background-color: #fcecee;
    color: #ff838c;
}
.unpaid::before {
    content: "?";
}
</style>
