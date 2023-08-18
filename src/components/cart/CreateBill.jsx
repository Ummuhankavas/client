import { Button, Card, Form, Input, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item label="Müşteri Adı" rules={[{ required: true }]} name={"customerName"}>
          <Input placeholder="Bir Müşteri Adı giriniz" />
        </Form.Item>
        <Form.Item label="Tel No" rules={[{ required: true }]} name={"customerTel"}>
          <Input placeholder="Tel No giriniz" maxLength={11}/>
        </Form.Item>
        <Form.Item label="Ödeme Yöntemi" rules={[{ required: true }]} name={"paymentMethode"}>
          <Select placeholder="Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Karti">Kredi Karti</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>549.00₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam %8</span>
            <span className="text-red-600">+43.92₺</span>
          </div>
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>592.92₺</b>
          </div>

          <div className="flex justify-end">
            <Button
              className="mt-4 "
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
