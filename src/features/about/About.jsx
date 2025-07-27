import { Typography } from "antd";

import Box from "../../components/Box";

const About = () => (
  <Box
    $height="100%"
    $maxWidth="800px"
    $margin="40px auto"
    $padding="24px"
    $flexDirection="column"
  >
    <Typography.Title level={1}>About This Application</Typography.Title>
    <Typography.Paragraph>
      Welcome to our application! This platform is designed to provide users
      with an intuitive and efficient experience.
    </Typography.Paragraph>
    <Typography.Title level={2}>Our Mission</Typography.Title>
    <Typography.Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna
      eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam
      felis id mauris.
    </Typography.Paragraph>
    <Typography.Title level={2}>Features</Typography.Title>
    <ul>
      <li>User-friendly interface</li>
      <li>Fast and reliable performance</li>
      <li>Secure and private</li>
      <li>Continuous updates and support</li>
    </ul>
    <Typography.Title level={2}>Contact Us</Typography.Title>
    <Typography.Paragraph>
      For more information, please contact us at{" "}
      <a href="mailto:info@example.com">info@example.com</a>.
    </Typography.Paragraph>
  </Box>
);

export default About;
