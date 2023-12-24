<template>
    <div class="item-list">
        <div class="header">
            <div
                style="
                    display: flex;
                    align-items: center;
                    height: 50px;
                    width: 20px;
                "
            >
                <label class="checkbox">
                    <input type="checkbox" @change="toggleAll" />
                    <span class="checkmark"></span>
                </label>
            </div>
            <div>ID Invoice</div>
            <div>Due date</div>
            <div>Client</div>
            <div>Contact</div>
            <div>Amount</div>
            <div>Status</div>
        </div>
        <InvoiceItem
            v-for="invoice in invoices"
            :key="invoice.id"
            :invoice="invoice"
            :allChecked="allChecked"
        />
    </div>
</template>

<script>
import InvoiceItem from "./InvoiceItem.vue";

export default {
    components: {
        InvoiceItem,
    },
    data() {
        return {
            allChecked: false,
            invoices: [
                {
                    id: "#INV-0001234",
                    date: "June 1, 2020, 08:22 AM",
                    client: "Nella Vita",
                    contact: "vita@mail.com",
                    amount: "$650,036.34",
                    status: "Completed",
                },
                {
                    id: "#INV-0001234",
                    date: "June 1, 2020, 08:22 AM",
                    client: "Johnny Ahmad",
                    contact: "ahmad@mail.com",
                    amount: "$650,036.34",
                    status: "Pending",
                },
                {
                    id: "#INV-0001234",
                    date: "June 10, 2021, 08:22 AM",
                    client: "Tany Soap",
                    contact: "soap@mail.com",
                    amount: "$650,036.34",
                    status: "Unpaid",
                },
            ],
            currentPage: 1,
        };
    },
    methods: {
        toggleAll() {
            this.allChecked = !this.allChecked;
        },
    },
};
</script>

<style scoped>
.header > div:nth-child(2) {
    width: 120px;
}
.header > div:nth-child(3) {
    width: 140px;
}
.header > div:nth-child(4) {
    width: 140px;
}
.header > div:nth-child(5) {
    width: 200px;
}
.header > div:nth-child(6) {
    width: 110px;
}

.item-list {
    font-family: "Arial", sans-serif;
}

.header {
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 20px;
    padding: 10px 20px;
    border-bottom: 1px solid #eaeaea;
}

.header input[type="checkbox"] {
    margin-right: 15px;
}

.item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
}

.pagination {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.pagination span {
    margin-right: 10px;
}

.pagination button {
    padding: 5px 15px;
    margin: 0 5px;
    border: 1px solid #dcdcdc;
    background-color: #f8f8f8;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #eaeaea;
}

.pagination .page-number {
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid #dcdcdc;
    background-color: #f8f8f8;
}

.pagination .page-number.active {
    background-color: #dcdcdc;
    font-weight: bold;
}
</style>
