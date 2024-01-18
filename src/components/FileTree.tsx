import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { useNavigate } from "react-router-dom";

export const FileTree = () => {
  const navigate = useNavigate();
  const pages = [
    { index: 1, name: "About.tsx", route: "/about" },
    { index: 2, name: "Experience.tsx", route: "/experience" },
    { index: 3, name: "Skills.tsx", route: "/skills" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentComponent, setCurrentComponent] = useState("");

  function renderTreeItemBgColor(index: any) {
    return selectedIndex === index ? "rgba(144,202,249,0.16)" : "#252527";
  }

  function renderTreeItemColor(index: any) {
    return selectedIndex === index ? "white" : "#bdc3cf";
  }

  const handleTreeItemClick = (index: any, route: any) => {
    console.log(`Navigate to ${route}`);
    navigate(route);
    setSelectedIndex(index);
  };

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<KeyboardArrowDownIcon />}
      defaultExpandIcon={<KeyboardArrowRightIcon />}
      sx={{ minWidth: 220 }}
      defaultExpanded={["-1"]}
    >
      <TreeItem nodeId="-1" label="Home" color="#bdc3cf">
        {pages.map(({ index, name, route }) => (
          <TreeItem
            key={index}
            nodeId={index.toString()}
            label={name}
            sx={{
              color: renderTreeItemColor(index),
              backgroundColor: renderTreeItemBgColor(index),
              "&& .Mui-selected": {
                backgroundColor: renderTreeItemBgColor(index),
              },
            }}
            icon={<JavascriptIcon style={{ fontSize: "2rem" }} />}
            onClick={() => handleTreeItemClick(index, route)}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
};
