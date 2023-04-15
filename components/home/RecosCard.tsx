import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function RecosCard({
    title,
    views,
    thumbnail,
    link,
    recos
}: {
    title: string;
    views: string;
    thumbnail: string;
    link: string;
    recos: string[];
}) {
    return (
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <img src={thumbnail} className="w-full object-cover object-center rounded-lg shadow-md" />
            <div className="relative px-4 -mt-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="space-4 mx-auto">
                        {
                            recos.map((reco, index) => (
                                <span key={index} className="bg-teal-200 text-teal-800 text-xs p-2 m-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    {reco}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
// title: "Top 5 Hindi Books I Read In 2021",
// views: "3.6K views",
// thumbnail: "https://i.ytimg.com/vi/KKE6cCtnHIc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBot9r1lLIkVAWHbo_kDC0ZW6n0HA",
// link: "https://www.youtube.com/watch?v=KKE6cCtnHIc",
// recos: ["Books"]