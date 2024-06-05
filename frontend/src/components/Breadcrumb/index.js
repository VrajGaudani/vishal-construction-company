import * as React from "react";
import "./index.scss";
import { Box, Breadcrumbs, Typography } from "@mui/material";

import { MdOutlineHorizontalRule } from "react-icons/md";
import Link from "next/link";

export default function BreadCrumb(props) {
  const dataa = [props.data[0]];
  const current = props.data[1];

  return (
    <Box className="breadcrumb-box">
      <Typography variant="h2" className="page-heading">
        {current.pagename}
      </Typography>
      <Breadcrumbs
        separator={<MdOutlineHorizontalRule size={30} />}
        aria-label="breadcrumb"
        className="container br-crumb"
      >
        {dataa?.map((item, index) => (
          <Link
            key={index + 1}
            underline="hover"
            className="links"
            color="inherit"
            href={item.url}
          >
            {item.pagename}
          </Link>
        ))}
        <Typography className="main-page" color="text.primary">
          {current.pagename}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
