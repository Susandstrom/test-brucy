import * as React from "react";

interface OrderItem {
  productName: string;
  quantity: number;
  price: number;
}

interface OrderEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  items: OrderItem[];
  total: number;
}

export function OrderEmailTemplate({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  items,
  total,
}: OrderEmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: "#d8f3d8",
        padding: "40px 0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <table
        align="center"
        width="600"
        cellPadding="0"
        cellSpacing="0"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "40px",
        }}
      >
        <tbody>
          <tr>
            <td>
              <h1 style={{ fontSize: "22px", marginBottom: "20px" }}>
                Tack för din order, {firstName}! 🌿
              </h1>

              <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                Vi packar din beställning och skickar den inom 2–3 arbetsdagar.
              </p>

              {/* ORDER TABELL */}
              <table
                width="100%"
                cellPadding="8"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  marginBottom: "20px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#f4f4f4" }}>
                    <th align="left">Produkt</th>
                    <th align="center">Antal</th>
                    <th align="right">Pris</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.productName}</td>
                      <td align="center">{item.quantity}</td>
                      <td align="right">
                        {(item.price * item.quantity).toFixed(2)} kr
                      </td>
                    </tr>
                  ))}

                  {/* TOTAL */}
                  <tr>
                    <td colSpan={2} align="right">
                      <strong>Total:</strong>
                    </td>
                    <td align="right">
                      <strong>{total.toFixed(2)} kr</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* KONTAKTUPPGIFTER */}
              <div style={{ marginBottom: "25px" }}>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Namn:</strong> {firstName} {lastName}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Telefon:</strong> {phoneNumber}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Email:</strong> {email}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Adress:</strong> {address}
                </p>
              </div>

              <p
                style={{
                  marginTop: "30px",
                  fontSize: "12px",
                  color: "#888",
                }}
              >
                Med vänliga hälsningar,  
                <br />
                Personalen på Grönaboken
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
