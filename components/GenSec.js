

export default function LetterPage() {
  const GenSecLetter = () => {
    const chunkedSlides = [
      {
        image: "images/image1.jpg",
        name: "Kushal Javkhedkar"
      }
    ];

    return (
      <div className="container mx-auto p-4">
        <div className="gen-sec-letter-container shadow relative">
          <section className="gen-sec-letter flex flex-col md:flex-row items-start justify-between">
            <div className="text-left w-full md:w-1/2 pr-4 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mt-4 mb-4">Message from the General Secretary</h2>
              <p>
                Dear members, <br />
                Welcome to our organization. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />

                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer sit amet est et sapien ullamcorper pharetra. Aenean ac felis vel velit aliquet suscipit. Phasellus ac libero purus. Fusce risus nisl, viverra et, tempor aliquet, tincidunt sed, est. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.<br /><br />

                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris magna. Donec nulla ante, auctor eu, consequat vitae, eleifend ac, enim. Etiam vel augue. Vivamus sit amet nulla. Integer vitae libero ac risus egestas placerat. Nullam mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur pretium tincidunt lacus.<br />

                Sed auctor, libero at volutpat feugiat, velit ante condimentum arcu, vitae viverra urna est eu velit. Ut faucibus sollicitudin magna. Integer ac leo. Suspendisse potenti. Aliquam erat volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed lectus. Integer euismod lacus luctus magna.<br /><br />

                Ut nec arcu. Ut sit amet felis ullamcorper, scelerisque ligula et, lacinia dui. Donec dui lectus, auctor ac varius et, euismod ac sapien. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Phasellus nec erat. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.<br /><br />

                Mauris sit amet massa vitae tortor condimentum lacinia. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.<br />
              </p>
              <h3 className="text-right font-bold right-0 bottom-3 mb-4">Kushal Javkhedkar</h3>
            </div>
            
            <div className="w-full md:w-1/2 relative flex rounded-lg justify-center md:justify-end mt-4 md:mt-0">
              <img
                src="images/image1.jpg"
                alt="Kushal Javkhedkar"
                className="w-3/4 h-auto md:w-1/2 md:h-auto rounded-lg md:absolute md:top-40 md:right-40"
              />
            </div>
          </section>
        </div>
      </div>
    );
  };

  return <GenSecLetter />;
}
