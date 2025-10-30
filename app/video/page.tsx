// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { BackgroundEffects } from "../../components/background-effects"
// import { Play, Heart, Star } from "lucide-react"

// export default function VideoPage() {
//   const [showContent, setShowContent] = useState(false)
//   const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null)

//   const videos = [
//     { label: "Your Video 1", type: "local", src: "/videos/your-video1.mp4" },
//     { label: "Your Video 2", type: "local", src: "/videos/your-video2.mp4" },
//     {
//       label: "Birthday Song (YouTube)",
//       type: "youtube",
//       src: "https://www.youtube.com/embed/K2aJTT29ZdU?autoplay=1&mute=1&rel=0"
//     }
//   ]

//   useEffect(() => {
//     const timer = setTimeout(() => setShowContent(true), 300)
//     return () => clearTimeout(timer)
//   }, [])

//   const handleVideoEnd = () => {
//     if (currentVideoIndex !== null) {
//       const nextIndex = (currentVideoIndex + 1) % videos.length
//       setCurrentVideoIndex(nextIndex)
//     }
//   }

//   return (
//     <div className="min-h-screen pt-16 relative overflow-hidden">
//       <BackgroundEffects />

//       <div className="container mx-auto px-4 py-12 relative z-10">
//         {/* Header */}
//         <div className={`text-center mb-12 ${showContent ? "animate-bounce-in" : "opacity-0"}`}>
//           <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4">Special Video 🎬</h1>
//           <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
//             A heartfelt video message created especially for your special day!
//           </p>
//         </div>

//         {/* Video Section */}
//         <Card
//           className={`max-w-5xl mx-auto glass-effect border-2 border-pink-200 mb-12 ${showContent ? "animate-slide-up" : "opacity-0"}`}
//           style={{ animationDelay: "0.3s" }}
//         >
//           <CardContent className="p-0">
//             <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 aspect-video flex items-center justify-center rounded-t-lg">
//               <div className="text-center">
//                 <div className="text-8xl mb-6 animate-bounce">🎥</div>
//                 <h3 className="text-3xl font-bold text-purple-600 mb-4">Your Special Video</h3>
//                 <p className="text-xl text-gray-600 mb-6 max-w-2xl">
//                   Choose a video to play below
//                 </p>

//                 {currentVideoIndex === null ? (
//                   <div className="flex flex-col gap-4 items-center">
//                     {videos.map((video, index) => (
//                       <Button
//                         key={index}
//                         className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg"
//                         onClick={() => setCurrentVideoIndex(index)}
//                       >
//                         <Play className="mr-2" size={20} />
//                         {video.label}
//                       </Button>
//                     ))}
//                   </div>
//                 ) : videos[currentVideoIndex].type === "local" ? (
//                   <video
//                     key={currentVideoIndex}
//                     src={videos[currentVideoIndex].src}
//                     controls
//                     autoPlay
//                     onEnded={handleVideoEnd}
//                     className="w-full h-auto rounded-lg"
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <iframe
//                     key={currentVideoIndex}
//                     src={videos[currentVideoIndex].src}
//                     width="100%"
//                     height="100%"
//                     allow="autoplay; encrypted-media"
//                     allowFullScreen
//                     className="rounded-lg aspect-video"
//                     onLoad={() => {
//                       setTimeout(() => handleVideoEnd(), 10000) // simulate end after 10s
//                     }}
//                   />
//                 )}
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Video Features */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <Card className={`glass-effect border-2 border-pink-200 card-hover ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
//             <CardContent className="p-8 text-center">
//               <Heart className="mx-auto text-red-500 mb-4 animate-pulse" size={48} />
//               <h4 className="text-xl font-bold text-purple-600 mb-3">Made with Love</h4>
//               <p className="text-gray-600">Every frame crafted with care and affection just for you</p>
//             </CardContent>
//           </Card>

//           <Card className={`glass-effect border-2 border-purple-200 card-hover ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
//             <CardContent className="p-8 text-center">
//               <Star className="mx-auto text-yellow-500 mb-4 animate-sparkle" size={48} />
//               <h4 className="text-xl font-bold text-purple-600 mb-3">Special Moments</h4>
//               <p className="text-gray-600">Capturing the essence of what makes you extraordinary</p>
//             </CardContent>
//           </Card>

//           <Card className={`glass-effect border-2 border-yellow-200 card-hover ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "1s" }}>
//             <CardContent className="p-8 text-center">
//               <div className="text-4xl mb-4">🎉</div>
//               <h4 className="text-xl font-bold text-purple-600 mb-3">Birthday Magic</h4>
//               <p className="text-gray-600">Celebrating another year of your amazing journey</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Video Message */}
//         <Card className={`max-w-3xl mx-auto glass-effect border-2 border-pink-300 ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "1.2s" }}>
//           <CardContent className="p-8 text-center bg-gradient-animated">
//             <div className="text-5xl mb-4">💝</div>
//             <h3 className="text-3xl font-bold text-white mb-4">A Message from the Heart</h3>
//             <p className="text-white text-lg leading-relaxed">
//               This video was created to show you just how special you are. Every smile, every laugh,
//               every moment of joy you bring to others — it all deserves to be celebrated. You're not just
//               having another birthday; you're marking another year of being absolutely wonderful!
//             </p>
//             <div className="text-4xl mt-6">✨💕✨</div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }










"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackgroundEffects } from "../../components/background-effects"
import { Play, Heart, Star } from "lucide-react"

export default function VideoPage() {
  const [showContent, setShowContent] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null)

  const videos = [
    { label: "Your Video 1", type: "local", src: "/videos/your-video1.mp4" },
    { label: "Your Video 2", type: "local", src: "/videos/your-video2.mp4" },
    { label: "Your Video 3", type: "local", src: "/videos/your-video3.mp4" },

  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (currentVideoIndex !== null && videos[currentVideoIndex].type === "youtube") {
      const timeout = setTimeout(() => {
        const nextIndex = (currentVideoIndex + 1) % videos.length
        setCurrentVideoIndex(nextIndex)
      }, 30000) // simulate 30s duration
      return () => clearTimeout(timeout)
    }
  }, [currentVideoIndex])

  const handleVideoEnd = () => {
    if (currentVideoIndex !== null) {
      const nextIndex = (currentVideoIndex + 1) % videos.length
      setCurrentVideoIndex(nextIndex)
    }
  }

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <BackgroundEffects />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 ${showContent ? "animate-bounce-in" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4">Special Video 🎬</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            A heartfelt video message created especially for your special day!
          </p>
        </div>

        {/* Video Section */}
        <Card
          className={`max-w-5xl mx-auto glass-effect border-2 border-pink-200 mb-12 ${showContent ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <CardContent className="p-0">
            <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 aspect-video flex items-center justify-center rounded-t-lg">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce">🎥</div>
                <h3 className="text-3xl font-bold text-purple-600 mb-4">Your Special Video</h3>
                <p className="text-xl text-gray-600 mb-6 max-w-2xl">
                  Choose a video to play below
                </p>

                {currentVideoIndex === null ? (
                  <div className="flex flex-col gap-4 items-center">
                    {videos.map((video, index) => (
                      <Button
                        key={index}
                        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg"
                        onClick={() => setCurrentVideoIndex(index)}
                      >
                        <Play className="mr-2" size={20} />
                        {video.label}
                      </Button>
                    ))}
                  </div>
                ) : videos[currentVideoIndex].type === "local" ? (
                  <video
                    key={currentVideoIndex}
                    src={videos[currentVideoIndex].src}
                    controls
                    autoPlay
                    onEnded={handleVideoEnd}
                    className="w-full h-auto rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    key={currentVideoIndex}
                    src={videos[currentVideoIndex].src}
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="rounded-lg aspect-video"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className={`glass-effect border-2 border-pink-200 card-hover ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            <CardContent className="p-8 text-center">
              <Heart className="mx-auto text-red-500 mb-4 animate-pulse" size={48} />
              <h4 className="text-xl font-bold text-purple-600 mb-3">Made with Love</h4>
              <p className="text-gray-600">Every frame crafted with care and affection just for you</p>
            </CardContent>
          </Card>

          <Card className={`glass-effect border-2 border-purple-200 card-hover ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
            <CardContent className="p-8 text-center">
              <Star className="mx-auto text-yellow-500 mb-4 animate-sparkle" size={48} />
              <h4 className="text-xl font-bold text-purple-600 mb-3">Special Moments</h4>
              <p className="text-gray-600">Capturing the essence of what makes you extraordinary</p>
            </CardContent>
          </Card>

          <Card className={`glass-effect border-2 border-yellow-200 card-hover ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "1s" }}>
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="text-xl font-bold text-purple-600 mb-3">Birthday Magic</h4>
              <p className="text-gray-600">Celebrating another year of your amazing journey</p>
            </CardContent>
          </Card>
        </div>

        {/* Video Message */}
        <Card className={`max-w-3xl mx-auto glass-effect border-2 border-pink-300 ${showContent ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "1.2s" }}>
          <CardContent className="p-8 text-center bg-gradient-animated">
            <div className="text-5xl mb-4">💝</div>
            <h3 className="text-3xl font-bold text-white mb-4">A Message from the Heart</h3>
            <p className="text-white text-lg leading-relaxed">
              This video was created to show you just how special you are. Every smile, every laugh,
              every moment of joy you bring to others — it all deserves to be celebrated. You're not just
              having another birthday; you're marking another year of being absolutely wonderful!
            </p>
            <div className="text-4xl mt-6">✨💕✨</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}