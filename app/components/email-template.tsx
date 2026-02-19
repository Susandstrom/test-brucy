import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  message,
}: EmailTemplateProps) {
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
              <h1
                style={{
                  color: "#2c3e50",
                  marginBottom: "20px",
                  fontSize: "22px",
                }}
              >
                Tack för ditt meddelande, {name}!
              </h1>

              <p style={{ fontSize: "16px", marginBottom: "15px" }}>
                Vi ser fram emot att svara dig och gör det så fort vi kan. 
              </p>
               <p style={{ fontSize: "16px", marginBottom: "15px" }}>
                Med vänliga hälsningar
              </p>
               <p style={{ fontSize: "16px", marginBottom: "15px" }}>
                personalen, Grönaboken
              </p>


              <div
                style={{
                  backgroundColor: "#f4f4f4",
                  padding: "20px",
                  borderRadius: "6px",
                  marginBottom: "20px",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                {message}
              </div>

              {/* Kontaktuppgifter */}
              <div style={{ marginBottom: "25px" }}>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Dina Kontaktuppgifter</strong>
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Namn:</strong> {name}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Email:</strong> {email}
                </p>
              </div>

              <p
                style={{
                  marginTop: "30px",
                  fontSize: "12px",
                  color: "#888",
                }}
              >
                Detta mail skickades via kontaktformuläret på Grönaboken.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
