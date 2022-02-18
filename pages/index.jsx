import { useDispatch } from "react-redux";
import { ResetPasswordModal } from "../components/Common";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <HomeLayout>
            <ResetPasswordModal />
            <div className="container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero quia voluptas esse recusandae maiores sit enim magni nostrum, tenetur quasi molestias rem ducimus illo necessitatibus, sequi aperiam, corporis doloremque iste veniam fugiat id distinctio veritatis alias. Alias tenetur ea nulla quod odio fugiat ad repellendus, debitis quas repudiandae nostrum excepturi magni consequuntur magnam recusandae quis quibusdam nisi? Placeat maiores obcaecati nemo repellendus exercitationem possimus quod beatae! Quidem corrupti quibusdam deserunt, corporis quae officiis saepe praesentium cupiditate odit dignissimos laborum! Doloremque iste tempora quos culpa! Ut a consequuntur quam, sed labore necessitatibus unde consequatur soluta accusamus id mollitia magnam voluptate.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero quia voluptas esse recusandae maiores sit enim magni nostrum, tenetur quasi molestias rem ducimus illo necessitatibus, sequi aperiam, corporis doloremque iste veniam fugiat id distinctio veritatis alias. Alias tenetur ea nulla quod odio fugiat ad repellendus, debitis quas repudiandae nostrum excepturi magni consequuntur magnam recusandae quis quibusdam nisi? Placeat maiores obcaecati nemo repellendus exercitationem possimus quod beatae! Quidem corrupti quibusdam deserunt, corporis quae officiis saepe praesentium cupiditate odit dignissimos laborum! Doloremque iste tempora quos culpa! Ut a consequuntur quam, sed labore necessitatibus unde consequatur soluta accusamus id mollitia magnam voluptate.
            </div>
        </HomeLayout>
    );
};

export default Home;