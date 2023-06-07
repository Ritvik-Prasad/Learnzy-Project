import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is Learnzy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Learnzy is an online learning platfoem that offers a wide range of courses taught by experienced tutors. It provides a flexible and interacive learning environment for students of all ages.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I interact with my tutors and fellow students?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Learnzy provides various communication features such as chat and discussion forums. You can interact with your tutor and fellow students, ask questions and participate in group discussions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is my personal information safe on learnzy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, Learnzy takes the privacy and security of your personal information seriously. We have robust measures in place to protect your data and adhere strict privacy policies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I get technical support if I encounter any issues?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you encounter any technical issues or need support, you can reach out to our customer support team via email - admin@learnzyAdmin.com. They will be happy to assist your concerns or queries.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I access Learnzy on my mobile device?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, Learnzy is designed to be mobile-friendly. You can access the platform from which ever platform you like. Tablets, Desktop, Mobile.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
