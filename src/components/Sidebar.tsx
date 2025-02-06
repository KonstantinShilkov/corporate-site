// import Link from "next/link";
// import Button from "@mui/material/Button";

// export default function Sidebar() {
//   return (
//     <nav className="sidebar_container">
//       <Link href="/dashboard" passHref className="sidebar_link">
//         <Button
//           color="secondary"
//           sx={{
//             fontSize: "22px",
//           }}
//         >
//           Dashboard
//         </Button>
//       </Link>
//       <Link href="/events" passHref className="sidebar_link">
//         <Button
//           color="secondary"
//           sx={{
//             fontSize: "22px",
//           }}
//         >
//           Events
//         </Button>
//       </Link>
//       <Link href="/trap" className="sidebar_link">
//         <Button
//           color="secondary"
//           sx={{
//             fontSize: "22px",
//           }}
//         >
//           Trap
//         </Button>
//       </Link>
//       <Link href="/control" className="sidebar_link">
//         <Button
//           color="secondary"
//           sx={{
//             fontSize: "22px",
//           }}
//         >
//           Control
//         </Button>
//       </Link>
//       <Link href="/settings" className="sidebar_link">
//         <Button
//           color="secondary"
//           sx={{
//             fontSize: "22px",
//           }}
//         >
//           Settings
//         </Button>
//       </Link>
//     </nav>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
// import { TreeItem } from "@mui/x-tree-view/TreeItem";
// import Link from "next/link";

// export default function Sidebar() {
//   return (
//     <Box sx={{ minWidth: 250, padding: 2 }}>
//       <SimpleTreeView>
//         <TreeItem
//           itemId="dashboard"
//           label={<Link href="/dashboard">Dashboard</Link>}
//         />
//         <TreeItem itemId="events" label={<Link href="/events">Events</Link>} />
//         <TreeItem itemId="trap" label={<Link href="/trap">Trap</Link>} />
//         <TreeItem
//           itemId="control"
//           label={<Link href="/control">Control</Link>}
//         />
//         <TreeItem
//           itemId="settings"
//           label={<Link href="/settings">Settings</Link>}
//         />
//       </SimpleTreeView>
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const router = useRouter();

  const handleItemClick = (itemId: string, href: string) => {
    setSelectedItem(itemId);
    router.push(href);
  };

  return (
    <Box sx={{ minWidth: 250, padding: 2 }}>
      <SimpleTreeView>
        {["dashboard", "events", "traps", "control", "settings"].map((item) => (
          <TreeItem
            key={item}
            itemId={item}
            label={
              <div
                onClick={() => handleItemClick(item, `/${item}`)}
                style={{
                  fontWeight: selectedItem === item ? "bold" : "normal",
                  cursor: "pointer",
                  padding: "4px 8px",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            }
          />
        ))}
      </SimpleTreeView>
    </Box>
  );
}
