import Script from 'next/script';

const Blogs = () => {
    return (
        <>
            <Script
                src="https://app.quickblog.co/js/embed.js?qb_id=1932FvKfvxzUbwIBfGCI8B0mvL0vDcRzAa8d3HBWcQzi"></Script>
            <div id="qb-posts"></div>
        </>
    );
};

export default Blogs;