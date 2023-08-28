module.exports = {
    async afterCreate(event) {
      const { result } = event;
      try {
        await strapi.plugins["email"].services.email.send({
          to: "vajintha1511@gmail.com",
          from: "gamatam.vajintha@zysk.tech",
          replyTo: "gamatam.vajintha@zysk.tech",
          subject: "New Contact form submission from Z3Partners Website*******",
          html: `
                
          Name :  ${result.Name}  <br/>
          Email : ${result.Email}   <br/>
          Subject:${result.Subject}  <br/>
          Message : ${result.Message}   <br/>
  
              `,
        });
      } catch (err) {
        console.log(err.Message);
      }
    },
  };
