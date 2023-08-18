import { useState } from "react";
import Header from "../components/header/Header";
import { Button, Card, Table } from "antd";
import PrintBill from "../components/bills/PrintBill";
import StatisticCard from "../components/statistics/StatisticCard";

const StatisticPage = () => {

  return (
    <>
      <Header />
      <div className="px-6">
      <h1 className="text-4xl font-bold text-center mb-4">Istatistiklerim</h1>
    <div className="statistic-section">
        <h2 className="text-l">Hos geldin <span className="text-green-700 font-bold text-xl">admin</span></h2>
        <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard title={"Toplam Musteri"} amount= {'10'} img={"/images/user.png"} />
            <StatisticCard title={"Toplam Kazanc"} amount= {'660.96₺'} img={"/images/money.png"} />
            <StatisticCard title={"Toplam Satis"} amount= {6} img={"/images/sale.png"} />
            <StatisticCard title={"Toplam Urun"} amount= {28} img={"/images/product.png"} />

        </div>
        

    </div>
        
        
      </div>
      
    </>
  );
};
export default StatisticPage;