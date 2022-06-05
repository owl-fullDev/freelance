<template>
  <div class="m-4">
    <div class="row">
      <div class="col">
        <h1>Product Sales By Store</h1>
        <b-table
          v-if="lensSales.length > 0"
          :mobile-cards="false"
          :data="lensSales"
          :default-sort-direction="'asc'"
        >
          <b-table-column field="storeName" label="store" v-slot="props" sortable>
            {{ props.row.storeName }}
          </b-table-column>
          <!--  v-for the amount of months here-->
          <!--          <b-table-column v-slot="props" field="storeName">-->
          <!--            {{ props.row }}-->
          <!--          </b-table-column>-->
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthlyStoreSalesTable",
  data() {
    return {
      lensSales: []
    };
  },
  created() {
    this.getStoreLensSales();
  },
  mounted() {
    this.getStoreLensSales();
  },
  methods: {
    getStoreLensSales() {
      this.lensSales = [
        {
          storeId: 1,
          quantity: 0,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2021,
          month: 8
        },
        {
          storeId: 2,
          quantity: 0,
          storeName: "O.W.L Kota Kasablanka",
          year: 2021,
          month: 8
        },
        {
          storeId: 3,
          quantity: 0,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2021,
          month: 8
        },
        {
          storeId: 4,
          quantity: 0,
          storeName: "O.W.L Supermal Karawaci",
          year: 2021,
          month: 8
        },
        {
          storeId: 5,
          quantity: 0,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2021,
          month: 8
        },
        {
          storeId: 6,
          quantity: 0,
          storeName: "O.W.L Grand Indonesia",
          year: 2021,
          month: 8
        },
        {
          storeId: 7,
          quantity: 0,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2021,
          month: 8
        },
        {
          storeId: 8,
          quantity: 0,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2021,
          month: 8
        },
        {
          storeId: 9,
          quantity: 0,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2021,
          month: 8
        },
        {
          storeId: 10,
          quantity: 0,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 11,
          quantity: 0,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2021,
          month: 8
        },
        {
          storeId: 12,
          quantity: 0,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2021,
          month: 8
        },
        {
          storeId: 13,
          quantity: 0,
          storeName: "O.W.L Gandaria City Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 14,
          quantity: 0,
          storeName: "O.W.L Artha Gading Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 15,
          quantity: 0,
          storeName: "O.W.L Margocity Mall ",
          year: 2021,
          month: 8
        },
        {
          storeId: 16,
          quantity: 0,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2021,
          month: 8
        },
        {
          storeId: 17,
          quantity: 0,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 18,
          quantity: 0,
          storeName: "O.W.L Tentrem Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 19,
          quantity: 0,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 20,
          quantity: 0,
          storeName: "O.W.L Pakuwon Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 21,
          quantity: 0,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 22,
          quantity: 0,
          storeName: "O.W.L Galaxy Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 23,
          quantity: 0,
          storeName: "O.W.L Ciputra World Mall",
          year: 2021,
          month: 8
        },
        {
          storeId: 24,
          quantity: 0,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2021,
          month: 8
        },
        {
          storeId: 25,
          quantity: 0,
          storeName: "O.W.L Bali Beachwalk",
          year: 2021,
          month: 8
        },
        {
          storeId: 26,
          quantity: 0,
          storeName: "O.W.L Grand Batam",
          year: 2021,
          month: 8
        },
        {
          storeId: 27,
          quantity: 0,
          storeName: "O.W.L Plaza Blok-M",
          year: 2021,
          month: 8
        },
        {
          storeId: 28,
          quantity: 0,
          storeName: "O.W.L AEON Sentul",
          year: 2021,
          month: 8
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2021,
          month: 8
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2021,
          month: 8
        },
        {
          storeId: 73,
          quantity: 0,
          storeName: "Toko Test Demo",
          year: 2021,
          month: 8
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2021,
          month: 8
        },
        {
          storeId: 1,
          quantity: 2,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2021,
          month: 9
        },
        {
          storeId: 2,
          quantity: 32,
          storeName: "O.W.L Kota Kasablanka",
          year: 2021,
          month: 9
        },
        {
          storeId: 3,
          quantity: 4,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2021,
          month: 9
        },
        {
          storeId: 4,
          quantity: 2,
          storeName: "O.W.L Supermal Karawaci",
          year: 2021,
          month: 9
        },
        {
          storeId: 5,
          quantity: 14,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2021,
          month: 9
        },
        {
          storeId: 6,
          quantity: 20,
          storeName: "O.W.L Grand Indonesia",
          year: 2021,
          month: 9
        },
        {
          storeId: 7,
          quantity: 5,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2021,
          month: 9
        },
        {
          storeId: 8,
          quantity: 16,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2021,
          month: 9
        },
        {
          storeId: 9,
          quantity: 6,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2021,
          month: 9
        },
        {
          storeId: 10,
          quantity: 0,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 11,
          quantity: 0,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2021,
          month: 9
        },
        {
          storeId: 12,
          quantity: 2,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2021,
          month: 9
        },
        {
          storeId: 13,
          quantity: 1,
          storeName: "O.W.L Gandaria City Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 14,
          quantity: 6,
          storeName: "O.W.L Artha Gading Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 15,
          quantity: 0,
          storeName: "O.W.L Margocity Mall ",
          year: 2021,
          month: 9
        },
        {
          storeId: 16,
          quantity: 0,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2021,
          month: 9
        },
        {
          storeId: 17,
          quantity: 0,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 18,
          quantity: 0,
          storeName: "O.W.L Tentrem Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 19,
          quantity: 0,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 20,
          quantity: 0,
          storeName: "O.W.L Pakuwon Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 21,
          quantity: 0,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 22,
          quantity: 0,
          storeName: "O.W.L Galaxy Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 23,
          quantity: 0,
          storeName: "O.W.L Ciputra World Mall",
          year: 2021,
          month: 9
        },
        {
          storeId: 24,
          quantity: 0,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2021,
          month: 9
        },
        {
          storeId: 25,
          quantity: 0,
          storeName: "O.W.L Bali Beachwalk",
          year: 2021,
          month: 9
        },
        {
          storeId: 26,
          quantity: 0,
          storeName: "O.W.L Grand Batam",
          year: 2021,
          month: 9
        },
        {
          storeId: 27,
          quantity: 0,
          storeName: "O.W.L Plaza Blok-M",
          year: 2021,
          month: 9
        },
        {
          storeId: 28,
          quantity: 0,
          storeName: "O.W.L AEON Sentul",
          year: 2021,
          month: 9
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2021,
          month: 9
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2021,
          month: 9
        },
        {
          storeId: 73,
          quantity: 1,
          storeName: "Toko Test Demo",
          year: 2021,
          month: 9
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2021,
          month: 9
        },
        {
          storeId: 1,
          quantity: 29,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2021,
          month: 10
        },
        {
          storeId: 2,
          quantity: 13,
          storeName: "O.W.L Kota Kasablanka",
          year: 2021,
          month: 10
        },
        {
          storeId: 3,
          quantity: 61,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2021,
          month: 10
        },
        {
          storeId: 4,
          quantity: 12,
          storeName: "O.W.L Supermal Karawaci",
          year: 2021,
          month: 10
        },
        {
          storeId: 5,
          quantity: 4,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2021,
          month: 10
        },
        {
          storeId: 6,
          quantity: 42,
          storeName: "O.W.L Grand Indonesia",
          year: 2021,
          month: 10
        },
        {
          storeId: 7,
          quantity: 69,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2021,
          month: 10
        },
        {
          storeId: 8,
          quantity: 20,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2021,
          month: 10
        },
        {
          storeId: 9,
          quantity: 20,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2021,
          month: 10
        },
        {
          storeId: 10,
          quantity: 0,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 11,
          quantity: 11,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2021,
          month: 10
        },
        {
          storeId: 12,
          quantity: 19,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2021,
          month: 10
        },
        {
          storeId: 13,
          quantity: 10,
          storeName: "O.W.L Gandaria City Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 14,
          quantity: 7,
          storeName: "O.W.L Artha Gading Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 15,
          quantity: 4,
          storeName: "O.W.L Margocity Mall ",
          year: 2021,
          month: 10
        },
        {
          storeId: 16,
          quantity: 21,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2021,
          month: 10
        },
        {
          storeId: 17,
          quantity: 8,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 18,
          quantity: 3,
          storeName: "O.W.L Tentrem Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 19,
          quantity: 1,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 20,
          quantity: 0,
          storeName: "O.W.L Pakuwon Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 21,
          quantity: 2,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 22,
          quantity: 8,
          storeName: "O.W.L Galaxy Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 23,
          quantity: 0,
          storeName: "O.W.L Ciputra World Mall",
          year: 2021,
          month: 10
        },
        {
          storeId: 24,
          quantity: 0,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2021,
          month: 10
        },
        {
          storeId: 25,
          quantity: 16,
          storeName: "O.W.L Bali Beachwalk",
          year: 2021,
          month: 10
        },
        {
          storeId: 26,
          quantity: 0,
          storeName: "O.W.L Grand Batam",
          year: 2021,
          month: 10
        },
        {
          storeId: 27,
          quantity: 0,
          storeName: "O.W.L Plaza Blok-M",
          year: 2021,
          month: 10
        },
        {
          storeId: 28,
          quantity: 0,
          storeName: "O.W.L AEON Sentul",
          year: 2021,
          month: 10
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2021,
          month: 10
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2021,
          month: 10
        },
        {
          storeId: 73,
          quantity: 1,
          storeName: "Toko Test Demo",
          year: 2021,
          month: 10
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2021,
          month: 10
        },
        {
          storeId: 1,
          quantity: 13,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2021,
          month: 11
        },
        {
          storeId: 2,
          quantity: 42,
          storeName: "O.W.L Kota Kasablanka",
          year: 2021,
          month: 11
        },
        {
          storeId: 3,
          quantity: 27,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2021,
          month: 11
        },
        {
          storeId: 4,
          quantity: 19,
          storeName: "O.W.L Supermal Karawaci",
          year: 2021,
          month: 11
        },
        {
          storeId: 5,
          quantity: 21,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2021,
          month: 11
        },
        {
          storeId: 6,
          quantity: 24,
          storeName: "O.W.L Grand Indonesia",
          year: 2021,
          month: 11
        },
        {
          storeId: 7,
          quantity: 9,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2021,
          month: 11
        },
        {
          storeId: 8,
          quantity: 23,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2021,
          month: 11
        },
        {
          storeId: 9,
          quantity: 3,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2021,
          month: 11
        },
        {
          storeId: 10,
          quantity: 1,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 11,
          quantity: 9,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2021,
          month: 11
        },
        {
          storeId: 12,
          quantity: 0,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2021,
          month: 11
        },
        {
          storeId: 13,
          quantity: 26,
          storeName: "O.W.L Gandaria City Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 14,
          quantity: 12,
          storeName: "O.W.L Artha Gading Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 15,
          quantity: 15,
          storeName: "O.W.L Margocity Mall ",
          year: 2021,
          month: 11
        },
        {
          storeId: 16,
          quantity: 13,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2021,
          month: 11
        },
        {
          storeId: 17,
          quantity: 30,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 18,
          quantity: 2,
          storeName: "O.W.L Tentrem Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 19,
          quantity: 10,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 20,
          quantity: 59,
          storeName: "O.W.L Pakuwon Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 21,
          quantity: 14,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 22,
          quantity: 8,
          storeName: "O.W.L Galaxy Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 23,
          quantity: 0,
          storeName: "O.W.L Ciputra World Mall",
          year: 2021,
          month: 11
        },
        {
          storeId: 24,
          quantity: 39,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2021,
          month: 11
        },
        {
          storeId: 25,
          quantity: 8,
          storeName: "O.W.L Bali Beachwalk",
          year: 2021,
          month: 11
        },
        {
          storeId: 26,
          quantity: 0,
          storeName: "O.W.L Grand Batam",
          year: 2021,
          month: 11
        },
        {
          storeId: 27,
          quantity: 0,
          storeName: "O.W.L Plaza Blok-M",
          year: 2021,
          month: 11
        },
        {
          storeId: 28,
          quantity: 0,
          storeName: "O.W.L AEON Sentul",
          year: 2021,
          month: 11
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2021,
          month: 11
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2021,
          month: 11
        },
        {
          storeId: 73,
          quantity: 2,
          storeName: "Toko Test Demo",
          year: 2021,
          month: 11
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2021,
          month: 11
        },
        {
          storeId: 1,
          quantity: 39,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2021,
          month: 12
        },
        {
          storeId: 2,
          quantity: 89,
          storeName: "O.W.L Kota Kasablanka",
          year: 2021,
          month: 12
        },
        {
          storeId: 3,
          quantity: 36,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2021,
          month: 12
        },
        {
          storeId: 4,
          quantity: 13,
          storeName: "O.W.L Supermal Karawaci",
          year: 2021,
          month: 12
        },
        {
          storeId: 5,
          quantity: 90,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2021,
          month: 12
        },
        {
          storeId: 6,
          quantity: 49,
          storeName: "O.W.L Grand Indonesia",
          year: 2021,
          month: 12
        },
        {
          storeId: 7,
          quantity: 64,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2021,
          month: 12
        },
        {
          storeId: 8,
          quantity: 15,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2021,
          month: 12
        },
        {
          storeId: 9,
          quantity: 44,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2021,
          month: 12
        },
        {
          storeId: 10,
          quantity: 7,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 11,
          quantity: 13,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2021,
          month: 12
        },
        {
          storeId: 12,
          quantity: 23,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2021,
          month: 12
        },
        {
          storeId: 13,
          quantity: 29,
          storeName: "O.W.L Gandaria City Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 14,
          quantity: 17,
          storeName: "O.W.L Artha Gading Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 15,
          quantity: 8,
          storeName: "O.W.L Margocity Mall ",
          year: 2021,
          month: 12
        },
        {
          storeId: 16,
          quantity: 51,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2021,
          month: 12
        },
        {
          storeId: 17,
          quantity: 14,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 18,
          quantity: 22,
          storeName: "O.W.L Tentrem Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 19,
          quantity: 39,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 20,
          quantity: 16,
          storeName: "O.W.L Pakuwon Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 21,
          quantity: 22,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 22,
          quantity: 57,
          storeName: "O.W.L Galaxy Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 23,
          quantity: 15,
          storeName: "O.W.L Ciputra World Mall",
          year: 2021,
          month: 12
        },
        {
          storeId: 24,
          quantity: 21,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2021,
          month: 12
        },
        {
          storeId: 25,
          quantity: 34,
          storeName: "O.W.L Bali Beachwalk",
          year: 2021,
          month: 12
        },
        {
          storeId: 26,
          quantity: 4,
          storeName: "O.W.L Grand Batam",
          year: 2021,
          month: 12
        },
        {
          storeId: 27,
          quantity: 8,
          storeName: "O.W.L Plaza Blok-M",
          year: 2021,
          month: 12
        },
        {
          storeId: 28,
          quantity: 0,
          storeName: "O.W.L AEON Sentul",
          year: 2021,
          month: 12
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2021,
          month: 12
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2021,
          month: 12
        },
        {
          storeId: 73,
          quantity: 1,
          storeName: "Toko Test Demo",
          year: 2021,
          month: 12
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2021,
          month: 12
        },
        {
          storeId: 1,
          quantity: 30,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2022,
          month: 1
        },
        {
          storeId: 2,
          quantity: 63,
          storeName: "O.W.L Kota Kasablanka",
          year: 2022,
          month: 1
        },
        {
          storeId: 3,
          quantity: 65,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2022,
          month: 1
        },
        {
          storeId: 4,
          quantity: 8,
          storeName: "O.W.L Supermal Karawaci",
          year: 2022,
          month: 1
        },
        {
          storeId: 5,
          quantity: 63,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2022,
          month: 1
        },
        {
          storeId: 6,
          quantity: 27,
          storeName: "O.W.L Grand Indonesia",
          year: 2022,
          month: 1
        },
        {
          storeId: 7,
          quantity: 29,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2022,
          month: 1
        },
        {
          storeId: 8,
          quantity: 8,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2022,
          month: 1
        },
        {
          storeId: 9,
          quantity: 18,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2022,
          month: 1
        },
        {
          storeId: 10,
          quantity: 12,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 11,
          quantity: 29,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2022,
          month: 1
        },
        {
          storeId: 12,
          quantity: 17,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2022,
          month: 1
        },
        {
          storeId: 13,
          quantity: 13,
          storeName: "O.W.L Gandaria City Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 14,
          quantity: 28,
          storeName: "O.W.L Artha Gading Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 15,
          quantity: 22,
          storeName: "O.W.L Margocity Mall ",
          year: 2022,
          month: 1
        },
        {
          storeId: 16,
          quantity: 7,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2022,
          month: 1
        },
        {
          storeId: 17,
          quantity: 37,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 18,
          quantity: 1,
          storeName: "O.W.L Tentrem Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 19,
          quantity: 33,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 20,
          quantity: 0,
          storeName: "O.W.L Pakuwon Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 21,
          quantity: 6,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 22,
          quantity: 35,
          storeName: "O.W.L Galaxy Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 23,
          quantity: 12,
          storeName: "O.W.L Ciputra World Mall",
          year: 2022,
          month: 1
        },
        {
          storeId: 24,
          quantity: 16,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2022,
          month: 1
        },
        {
          storeId: 25,
          quantity: 4,
          storeName: "O.W.L Bali Beachwalk",
          year: 2022,
          month: 1
        },
        {
          storeId: 26,
          quantity: 15,
          storeName: "O.W.L Grand Batam",
          year: 2022,
          month: 1
        },
        {
          storeId: 27,
          quantity: 16,
          storeName: "O.W.L Plaza Blok-M",
          year: 2022,
          month: 1
        },
        {
          storeId: 28,
          quantity: 0,
          storeName: "O.W.L AEON Sentul",
          year: 2022,
          month: 1
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2022,
          month: 1
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2022,
          month: 1
        },
        {
          storeId: 73,
          quantity: 0,
          storeName: "Toko Test Demo",
          year: 2022,
          month: 1
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2022,
          month: 1
        },
        {
          storeId: 1,
          quantity: 9,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2022,
          month: 2
        },
        {
          storeId: 2,
          quantity: 51,
          storeName: "O.W.L Kota Kasablanka",
          year: 2022,
          month: 2
        },
        {
          storeId: 3,
          quantity: 2,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2022,
          month: 2
        },
        {
          storeId: 4,
          quantity: 21,
          storeName: "O.W.L Supermal Karawaci",
          year: 2022,
          month: 2
        },
        {
          storeId: 5,
          quantity: 14,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2022,
          month: 2
        },
        {
          storeId: 6,
          quantity: 15,
          storeName: "O.W.L Grand Indonesia",
          year: 2022,
          month: 2
        },
        {
          storeId: 7,
          quantity: 13,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2022,
          month: 2
        },
        {
          storeId: 8,
          quantity: 16,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2022,
          month: 2
        },
        {
          storeId: 9,
          quantity: 9,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2022,
          month: 2
        },
        {
          storeId: 10,
          quantity: 7,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 11,
          quantity: 0,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2022,
          month: 2
        },
        {
          storeId: 12,
          quantity: 4,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2022,
          month: 2
        },
        {
          storeId: 13,
          quantity: 0,
          storeName: "O.W.L Gandaria City Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 14,
          quantity: 4,
          storeName: "O.W.L Artha Gading Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 15,
          quantity: 12,
          storeName: "O.W.L Margocity Mall ",
          year: 2022,
          month: 2
        },
        {
          storeId: 16,
          quantity: 3,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2022,
          month: 2
        },
        {
          storeId: 17,
          quantity: 18,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 18,
          quantity: 1,
          storeName: "O.W.L Tentrem Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 19,
          quantity: 4,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 20,
          quantity: 26,
          storeName: "O.W.L Pakuwon Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 21,
          quantity: 11,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 22,
          quantity: 17,
          storeName: "O.W.L Galaxy Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 23,
          quantity: 2,
          storeName: "O.W.L Ciputra World Mall",
          year: 2022,
          month: 2
        },
        {
          storeId: 24,
          quantity: 10,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2022,
          month: 2
        },
        {
          storeId: 25,
          quantity: 1,
          storeName: "O.W.L Bali Beachwalk",
          year: 2022,
          month: 2
        },
        {
          storeId: 26,
          quantity: 18,
          storeName: "O.W.L Grand Batam",
          year: 2022,
          month: 2
        },
        {
          storeId: 27,
          quantity: 8,
          storeName: "O.W.L Plaza Blok-M",
          year: 2022,
          month: 2
        },
        {
          storeId: 28,
          quantity: 0,
          storeName: "O.W.L AEON Sentul",
          year: 2022,
          month: 2
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2022,
          month: 2
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2022,
          month: 2
        },
        {
          storeId: 73,
          quantity: 0,
          storeName: "Toko Test Demo",
          year: 2022,
          month: 2
        },
        {
          storeId: 99,
          quantity: 1,
          storeName: "O.W.L Head Office",
          year: 2022,
          month: 2
        },
        {
          storeId: 1,
          quantity: 11,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2022,
          month: 3
        },
        {
          storeId: 2,
          quantity: 30,
          storeName: "O.W.L Kota Kasablanka",
          year: 2022,
          month: 3
        },
        {
          storeId: 3,
          quantity: 0,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2022,
          month: 3
        },
        {
          storeId: 4,
          quantity: 24,
          storeName: "O.W.L Supermal Karawaci",
          year: 2022,
          month: 3
        },
        {
          storeId: 5,
          quantity: 43,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2022,
          month: 3
        },
        {
          storeId: 6,
          quantity: 12,
          storeName: "O.W.L Grand Indonesia",
          year: 2022,
          month: 3
        },
        {
          storeId: 7,
          quantity: 18,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2022,
          month: 3
        },
        {
          storeId: 8,
          quantity: 26,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2022,
          month: 3
        },
        {
          storeId: 9,
          quantity: 11,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2022,
          month: 3
        },
        {
          storeId: 10,
          quantity: 3,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 11,
          quantity: 12,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2022,
          month: 3
        },
        {
          storeId: 12,
          quantity: 11,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2022,
          month: 3
        },
        {
          storeId: 13,
          quantity: 7,
          storeName: "O.W.L Gandaria City Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 14,
          quantity: 9,
          storeName: "O.W.L Artha Gading Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 15,
          quantity: 13,
          storeName: "O.W.L Margocity Mall ",
          year: 2022,
          month: 3
        },
        {
          storeId: 16,
          quantity: 36,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2022,
          month: 3
        },
        {
          storeId: 17,
          quantity: 28,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 18,
          quantity: 8,
          storeName: "O.W.L Tentrem Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 19,
          quantity: 1,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 20,
          quantity: 10,
          storeName: "O.W.L Pakuwon Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 21,
          quantity: 4,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 22,
          quantity: 2,
          storeName: "O.W.L Galaxy Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 23,
          quantity: 3,
          storeName: "O.W.L Ciputra World Mall",
          year: 2022,
          month: 3
        },
        {
          storeId: 24,
          quantity: 9,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2022,
          month: 3
        },
        {
          storeId: 25,
          quantity: 2,
          storeName: "O.W.L Bali Beachwalk",
          year: 2022,
          month: 3
        },
        {
          storeId: 26,
          quantity: 17,
          storeName: "O.W.L Grand Batam",
          year: 2022,
          month: 3
        },
        {
          storeId: 27,
          quantity: 11,
          storeName: "O.W.L Plaza Blok-M",
          year: 2022,
          month: 3
        },
        {
          storeId: 28,
          quantity: 13,
          storeName: "O.W.L AEON Sentul",
          year: 2022,
          month: 3
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2022,
          month: 3
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2022,
          month: 3
        },
        {
          storeId: 73,
          quantity: 0,
          storeName: "Toko Test Demo",
          year: 2022,
          month: 3
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2022,
          month: 3
        },
        {
          storeId: 1,
          quantity: 18,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2022,
          month: 4
        },
        {
          storeId: 2,
          quantity: 70,
          storeName: "O.W.L Kota Kasablanka",
          year: 2022,
          month: 4
        },
        {
          storeId: 3,
          quantity: 7,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2022,
          month: 4
        },
        {
          storeId: 4,
          quantity: 41,
          storeName: "O.W.L Supermal Karawaci",
          year: 2022,
          month: 4
        },
        {
          storeId: 5,
          quantity: 56,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2022,
          month: 4
        },
        {
          storeId: 6,
          quantity: 5,
          storeName: "O.W.L Grand Indonesia",
          year: 2022,
          month: 4
        },
        {
          storeId: 7,
          quantity: 37,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2022,
          month: 4
        },
        {
          storeId: 8,
          quantity: 17,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2022,
          month: 4
        },
        {
          storeId: 9,
          quantity: 25,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2022,
          month: 4
        },
        {
          storeId: 10,
          quantity: 5,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 11,
          quantity: 3,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2022,
          month: 4
        },
        {
          storeId: 12,
          quantity: 40,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2022,
          month: 4
        },
        {
          storeId: 13,
          quantity: 35,
          storeName: "O.W.L Gandaria City Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 14,
          quantity: 18,
          storeName: "O.W.L Artha Gading Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 15,
          quantity: 0,
          storeName: "O.W.L Margocity Mall ",
          year: 2022,
          month: 4
        },
        {
          storeId: 16,
          quantity: 51,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2022,
          month: 4
        },
        {
          storeId: 17,
          quantity: 16,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 18,
          quantity: 22,
          storeName: "O.W.L Tentrem Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 19,
          quantity: 30,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 20,
          quantity: 1,
          storeName: "O.W.L Pakuwon Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 21,
          quantity: 36,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 22,
          quantity: 60,
          storeName: "O.W.L Galaxy Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 23,
          quantity: 4,
          storeName: "O.W.L Ciputra World Mall",
          year: 2022,
          month: 4
        },
        {
          storeId: 24,
          quantity: 26,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2022,
          month: 4
        },
        {
          storeId: 25,
          quantity: 18,
          storeName: "O.W.L Bali Beachwalk",
          year: 2022,
          month: 4
        },
        {
          storeId: 26,
          quantity: 16,
          storeName: "O.W.L Grand Batam",
          year: 2022,
          month: 4
        },
        {
          storeId: 27,
          quantity: 8,
          storeName: "O.W.L Plaza Blok-M",
          year: 2022,
          month: 4
        },
        {
          storeId: 28,
          quantity: 30,
          storeName: "O.W.L AEON Sentul",
          year: 2022,
          month: 4
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2022,
          month: 4
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2022,
          month: 4
        },
        {
          storeId: 73,
          quantity: 0,
          storeName: "Toko Test Demo",
          year: 2022,
          month: 4
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2022,
          month: 4
        },
        {
          storeId: 1,
          quantity: 26,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2022,
          month: 5
        },
        {
          storeId: 2,
          quantity: 147,
          storeName: "O.W.L Kota Kasablanka",
          year: 2022,
          month: 5
        },
        {
          storeId: 3,
          quantity: 88,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2022,
          month: 5
        },
        {
          storeId: 4,
          quantity: 10,
          storeName: "O.W.L Supermal Karawaci",
          year: 2022,
          month: 5
        },
        {
          storeId: 5,
          quantity: 93,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2022,
          month: 5
        },
        {
          storeId: 6,
          quantity: 62,
          storeName: "O.W.L Grand Indonesia",
          year: 2022,
          month: 5
        },
        {
          storeId: 7,
          quantity: 112,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2022,
          month: 5
        },
        {
          storeId: 8,
          quantity: 17,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2022,
          month: 5
        },
        {
          storeId: 9,
          quantity: 18,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2022,
          month: 5
        },
        {
          storeId: 10,
          quantity: 7,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 11,
          quantity: 0,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2022,
          month: 5
        },
        {
          storeId: 12,
          quantity: 14,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2022,
          month: 5
        },
        {
          storeId: 13,
          quantity: 45,
          storeName: "O.W.L Gandaria City Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 14,
          quantity: 0,
          storeName: "O.W.L Artha Gading Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 15,
          quantity: 21,
          storeName: "O.W.L Margocity Mall ",
          year: 2022,
          month: 5
        },
        {
          storeId: 16,
          quantity: 65,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2022,
          month: 5
        },
        {
          storeId: 17,
          quantity: 41,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 18,
          quantity: 7,
          storeName: "O.W.L Tentrem Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 19,
          quantity: 20,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 20,
          quantity: 43,
          storeName: "O.W.L Pakuwon Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 21,
          quantity: 9,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 22,
          quantity: 41,
          storeName: "O.W.L Galaxy Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 23,
          quantity: 2,
          storeName: "O.W.L Ciputra World Mall",
          year: 2022,
          month: 5
        },
        {
          storeId: 24,
          quantity: 37,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2022,
          month: 5
        },
        {
          storeId: 25,
          quantity: 19,
          storeName: "O.W.L Bali Beachwalk",
          year: 2022,
          month: 5
        },
        {
          storeId: 26,
          quantity: 10,
          storeName: "O.W.L Grand Batam",
          year: 2022,
          month: 5
        },
        {
          storeId: 27,
          quantity: 14,
          storeName: "O.W.L Plaza Blok-M",
          year: 2022,
          month: 5
        },
        {
          storeId: 28,
          quantity: 36,
          storeName: "O.W.L AEON Sentul",
          year: 2022,
          month: 5
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2022,
          month: 5
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2022,
          month: 5
        },
        {
          storeId: 73,
          quantity: 0,
          storeName: "Toko Test Demo",
          year: 2022,
          month: 5
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2022,
          month: 5
        },
        {
          storeId: 1,
          quantity: 1,
          storeName: "O.W.L Pondok Indah Mall 3",
          year: 2022,
          month: 6
        },
        {
          storeId: 2,
          quantity: 3,
          storeName: "O.W.L Kota Kasablanka",
          year: 2022,
          month: 6
        },
        {
          storeId: 3,
          quantity: 2,
          storeName: "O.W.L Summarecon Mall Bekasi",
          year: 2022,
          month: 6
        },
        {
          storeId: 4,
          quantity: 1,
          storeName: "O.W.L Supermal Karawaci",
          year: 2022,
          month: 6
        },
        {
          storeId: 5,
          quantity: 2,
          storeName: "O.W.L Summarecon Mall Serpong",
          year: 2022,
          month: 6
        },
        {
          storeId: 6,
          quantity: 1,
          storeName: "O.W.L Grand Indonesia",
          year: 2022,
          month: 6
        },
        {
          storeId: 7,
          quantity: 0,
          storeName: "O.W.L AEON Mall BSD City",
          year: 2022,
          month: 6
        },
        {
          storeId: 8,
          quantity: 1,
          storeName: "O.W.L Mall Kelapa Gading",
          year: 2022,
          month: 6
        },
        {
          storeId: 9,
          quantity: 0,
          storeName: "O.W.L AEON Mall Garden City",
          year: 2022,
          month: 6
        },
        {
          storeId: 10,
          quantity: 0,
          storeName: "O.W.L Lagoon Avenue Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 11,
          quantity: 0,
          storeName: "O.W.L Trans Studio Mall Cibubur",
          year: 2022,
          month: 6
        },
        {
          storeId: 12,
          quantity: 0,
          storeName: "O.W.L Mall Of Indonesia",
          year: 2022,
          month: 6
        },
        {
          storeId: 13,
          quantity: 3,
          storeName: "O.W.L Gandaria City Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 14,
          quantity: 0,
          storeName: "O.W.L Artha Gading Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 15,
          quantity: 0,
          storeName: "O.W.L Margocity Mall ",
          year: 2022,
          month: 6
        },
        {
          storeId: 16,
          quantity: 2,
          storeName: "O.W.L Trans Studio Mall Bandung",
          year: 2022,
          month: 6
        },
        {
          storeId: 17,
          quantity: 2,
          storeName: "O.W.L Paris Van Java Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 18,
          quantity: 0,
          storeName: "O.W.L Tentrem Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 19,
          quantity: 0,
          storeName: "O.W.L Plaza Ambarrukmo Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 20,
          quantity: 1,
          storeName: "O.W.L Pakuwon Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 21,
          quantity: 2,
          storeName: "O.W.L Tunjungan Plaza Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 22,
          quantity: 1,
          storeName: "O.W.L Galaxy Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 23,
          quantity: 0,
          storeName: "O.W.L Ciputra World Mall",
          year: 2022,
          month: 6
        },
        {
          storeId: 24,
          quantity: 2,
          storeName: "O.W.L AEON Tanjung Barat",
          year: 2022,
          month: 6
        },
        {
          storeId: 25,
          quantity: 0,
          storeName: "O.W.L Bali Beachwalk",
          year: 2022,
          month: 6
        },
        {
          storeId: 26,
          quantity: 0,
          storeName: "O.W.L Grand Batam",
          year: 2022,
          month: 6
        },
        {
          storeId: 27,
          quantity: 0,
          storeName: "O.W.L Plaza Blok-M",
          year: 2022,
          month: 6
        },
        {
          storeId: 28,
          quantity: 1,
          storeName: "O.W.L AEON Sentul",
          year: 2022,
          month: 6
        },
        {
          storeId: 29,
          quantity: 0,
          storeName: "O.W.L One Batam",
          year: 2022,
          month: 6
        },
        {
          storeId: 72,
          quantity: 0,
          storeName: "Lee Cooper SMB",
          year: 2022,
          month: 6
        },
        {
          storeId: 73,
          quantity: 0,
          storeName: "Toko Test Demo",
          year: 2022,
          month: 6
        },
        {
          storeId: 99,
          quantity: 0,
          storeName: "O.W.L Head Office",
          year: 2022,
          month: 6
        }
      ];
    }
  }
};
</script>
