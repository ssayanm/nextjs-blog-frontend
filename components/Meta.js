import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
      />
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="NDEwNmI3OWQtZmI0OC00OThjLWFjYzctMDE4NDI1Zjg3NTg4NjM3MjY4NjQxNTkyMDE3Nzk5"
        hidden
      ></div>

      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "The Fitness Zone",
  keywords: "gym, finess, body building",
  description: "No pain, No gain shut up and train",
};

export default Meta;
