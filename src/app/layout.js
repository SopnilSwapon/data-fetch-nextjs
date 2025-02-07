import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Avatar, Box } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['300', '400', '900'], subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Data-Fetch',
    template: '%s | Data-Fetch'
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav></Nav>\

        <Box sx={{ position: "fixed", right: 16, }}>
          <Avatar sx={{ width: '100px', height: '100px', bgcolor: blue[500] }}>Sopon</Avatar>
        </Box>
        {children}
      </body>
    </html>
  );
}
