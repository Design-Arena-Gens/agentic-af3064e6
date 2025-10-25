"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Garage Cleaning Day
        </h1>
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-auto rounded-lg shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Garage Background */}
          <rect x="0" y="0" width="1200" height="800" fill="#2d2d2d" />

          {/* Garage Door */}
          <rect x="0" y="0" width="1200" height="100" fill="#1a1a1a" />
          <line x1="0" y1="30" x2="1200" y2="30" stroke="#404040" strokeWidth="2" />
          <line x1="0" y1="60" x2="1200" y2="60" stroke="#404040" strokeWidth="2" />

          {/* Garage Floor */}
          <rect x="0" y="600" width="1200" height="200" fill="#3a3a3a" />

          {/* Floor tiles pattern */}
          {[...Array(20)].map((_, i) => (
            <line key={`floor-${i}`} x1={i * 60} y1="600" x2={i * 60} y2="800" stroke="#454545" strokeWidth="1" />
          ))}

          {/* Workbench in background */}
          <rect x="850" y="350" width="300" height="250" fill="#4a4a4a" />
          <rect x="850" y="350" width="300" height="30" fill="#5a5a5a" />

          {/* Tools on workbench */}
          <circle cx="920" cy="370" r="15" fill="#ff6b6b" />
          <rect x="980" y="360" width="40" height="20" fill="#6c757d" />
          <rect x="1070" y="355" width="50" height="30" fill="#ffd93d" />

          {/* Hanging lamp */}
          <line x1="600" y1="100" x2="600" y2="180" stroke="#333" strokeWidth="3" />
          <ellipse cx="600" cy="200" rx="60" ry="40" fill="#ffd700" opacity="0.8" />
          <ellipse cx="600" cy="200" rx="50" ry="32" fill="#fff9e6" opacity="0.9" />

          {/* Light glow */}
          <ellipse cx="600" cy="450" rx="400" ry="200" fill="url(#lightGradient)" opacity="0.3" />

          {/* Honda 350cc Motorcycle */}
          {/* Back wheel */}
          <circle cx="420" cy="580" r="70" fill="#1a1a1a" stroke="#000" strokeWidth="4" />
          <circle cx="420" cy="580" r="55" fill="#2d2d2d" />
          <circle cx="420" cy="580" r="20" fill="#silver" />

          {/* Front wheel */}
          <circle cx="680" cy="580" r="70" fill="#1a1a1a" stroke="#000" strokeWidth="4" />
          <circle cx="680" cy="580" r="55" fill="#2d2d2d" />
          <circle cx="680" cy="580" r="20" fill="#silver" />

          {/* Wheel spokes - back */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`spoke-back-${angle}`}
                x1="420"
                y1="580"
                x2={420 + 55 * Math.cos(rad)}
                y2={580 + 55 * Math.sin(rad)}
                stroke="#666"
                strokeWidth="2"
              />
            );
          })}

          {/* Wheel spokes - front */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`spoke-front-${angle}`}
                x1="680"
                y1="580"
                x2={680 + 55 * Math.cos(rad)}
                y2={580 + 55 * Math.sin(rad)}
                stroke="#666"
                strokeWidth="2"
              />
            );
          })}

          {/* Bike frame */}
          <path d="M 420 580 L 480 480 L 550 440 L 650 440 L 680 500 L 680 580"
                stroke="#c41e3a" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />

          {/* Lower frame */}
          <path d="M 420 580 L 500 560 L 600 560 L 680 580"
                stroke="#c41e3a" strokeWidth="10" fill="none" strokeLinecap="round" />

          {/* Gas tank */}
          <ellipse cx="550" cy="440" rx="80" ry="50" fill="#ff1744" stroke="#b71c1c" strokeWidth="3" />
          <ellipse cx="550" cy="430" rx="60" ry="30" fill="#ff5252" opacity="0.6" />

          {/* Seat */}
          <ellipse cx="480" cy="460" rx="60" ry="25" fill="#1a1a1a" stroke="#000" strokeWidth="2" />

          {/* Handlebars */}
          <line x1="650" y1="440" x2="630" y2="400" stroke="#333" strokeWidth="8" strokeLinecap="round" />
          <line x1="630" y1="400" x2="590" y2="400" stroke="#333" strokeWidth="6" />
          <line x1="630" y1="400" x2="670" y2="400" stroke="#333" strokeWidth="6" />
          <circle cx="590" cy="400" r="8" fill="#444" />
          <circle cx="670" cy="400" r="8" fill="#444" />

          {/* Headlight */}
          <circle cx="650" cy="470" r="25" fill="#fff9e6" stroke="#333" strokeWidth="3" />
          <circle cx="650" cy="470" r="18" fill="#ffffcc" opacity="0.8" />

          {/* Exhaust pipe */}
          <rect x="500" y="570" width="160" height="12" rx="6" fill="#708090" />
          <rect x="640" y="570" width="30" height="16" rx="8" fill="#556270" />

          {/* Water droplets on bike */}
          <circle cx="530" cy="450" r="4" fill="#87ceeb" opacity="0.8" />
          <circle cx="570" cy="460" r="5" fill="#87ceeb" opacity="0.8" />
          <circle cx="610" cy="445" r="3" fill="#87ceeb" opacity="0.8" />
          <circle cx="450" cy="590" r="4" fill="#87ceeb" opacity="0.8" />
          <circle cx="650" cy="595" r="5" fill="#87ceeb" opacity="0.8" />
          <ellipse cx="550" cy="455" rx="15" ry="8" fill="#b0e0e6" opacity="0.5" />

          {/* Shine effects on bike */}
          <ellipse cx="560" cy="425" rx="40" ry="15" fill="white" opacity="0.4" />
          <ellipse cx="480" cy="455" rx="30" ry="10" fill="white" opacity="0.3" />

          {/* Character - Anime guy in his early twenties */}
          {/* Legs */}
          <rect x="230" y="480" width="35" height="120" rx="5" fill="#1e40af" />
          <rect x="280" y="480" width="35" height="120" rx="5" fill="#1e40af" />
          <ellipse cx="247" cy="600" rx="25" ry="15" fill="#1f2937" />
          <ellipse cx="297" cy="600" rx="25" ry="15" fill="#1f2937" />

          {/* Body/Torso */}
          <rect x="220" y="350" width="105" height="140" rx="10" fill="#ff8c00" />
          <rect x="225" y="355" width="95" height="60" rx="8" fill="#ffa500" opacity="0.7" />

          {/* Arms */}
          {/* Left arm extended holding cloth */}
          <rect x="180" y="380" width="50" height="30" rx="15" fill="#ff8c00" />
          <rect x="130" y="390" width="60" height="28" rx="14" fill="#ffb84d" />

          {/* Right arm bent */}
          <rect x="315" y="380" width="45" height="28" rx="14" fill="#ff8c00" />
          <rect x="345" y="410" width="28" height="50" rx="14" fill="#ffb84d" />

          {/* Hands */}
          <ellipse cx="145" cy="405" rx="15" ry="12" fill="#f4a460" />
          <ellipse cx="360" cy="450" rx="12" ry="15" fill="#f4a460" />

          {/* Neck */}
          <rect x="255" y="330" width="35" height="25" rx="5" fill="#f4a460" />

          {/* Head */}
          <ellipse cx="272" cy="300" rx="45" ry="50" fill="#f4a460" />

          {/* Hair - spiky Dragon Ball Z style */}
          <path d="M 240 280 L 230 240 L 240 250 L 235 230 L 245 245 L 242 220 L 252 240"
                fill="#1a1a1a" stroke="#000" strokeWidth="2" />
          <path d="M 255 270 L 250 210 L 260 230 L 258 200 L 268 225"
                fill="#1a1a1a" stroke="#000" strokeWidth="2" />
          <path d="M 272 268 L 275 200 L 278 230 L 282 210 L 280 235"
                fill="#1a1a1a" stroke="#000" strokeWidth="2" />
          <path d="M 290 275 L 295 220 L 298 240 L 303 225 L 300 245"
                fill="#1a1a1a" stroke="#000" strokeWidth="2" />
          <path d="M 305 285 L 315 240 L 310 250 L 318 235 L 312 255"
                fill="#1a1a1a" stroke="#000" strokeWidth="2" />

          {/* Eyebrows */}
          <path d="M 250 290 L 265 288" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M 280 288 L 295 290" stroke="#000" strokeWidth="3" strokeLinecap="round" />

          {/* Eyes - anime style */}
          <ellipse cx="258" cy="300" rx="8" ry="12" fill="#fff" />
          <ellipse cx="286" cy="300" rx="8" ry="12" fill="#fff" />
          <circle cx="258" cy="302" r="6" fill="#4a4a4a" />
          <circle cx="286" cy="302" r="6" fill="#4a4a4a" />
          <circle cx="260" cy="299" r="3" fill="#fff" />
          <circle cx="288" cy="299" r="3" fill="#fff" />

          {/* Determined expression - nose and mouth */}
          <line x1="272" y1="305" x2="270" y2="312" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          <path d="M 260 320 Q 272 318 284 320" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Microfiber cloth in left hand */}
          <rect x="120" y="395" width="40" height="30" rx="3" fill="#87ceeb" opacity="0.8" />
          <rect x="125" y="398" width="30" height="24" rx="2" fill="#b0e0e6" opacity="0.7" />
          <path d="M 125 398 Q 140 405 125 422" stroke="#6ca6cd" strokeWidth="1" fill="none" />
          <path d="M 135 398 Q 148 408 135 422" stroke="#6ca6cd" strokeWidth="1" fill="none" />
          <path d="M 145 398 Q 155 410 145 422" stroke="#6ca6cd" strokeWidth="1" fill="none" />

          {/* Shampoo spray bottle in right hand */}
          <rect x="355" y="430" width="25" height="50" rx="3" fill="#32cd32" />
          <rect x="358" y="435" width="19" height="35" rx="2" fill="#98fb98" opacity="0.6" />
          <rect x="362" y="425" width="11" height="10" fill="#228b22" />
          <rect x="365" y="420" width="5" height="8" fill="#1a1a1a" />

          {/* Spray mist */}
          <circle cx="375" cy="415" r="3" fill="#e0f7fa" opacity="0.6" />
          <circle cx="382" cy="410" r="2" fill="#e0f7fa" opacity="0.5" />
          <circle cx="370" cy="408" r="2.5" fill="#e0f7fa" opacity="0.5" />
          <circle cx="378" cy="403" r="2" fill="#e0f7fa" opacity="0.4" />

          {/* Bucket on the floor */}
          <ellipse cx="150" cy="600" rx="50" ry="15" fill="#e74c3c" />
          <rect x="100" y="530" width="100" height="70" fill="#e74c3c" />
          <rect x="105" y="535" width="90" height="60" fill="#c0392b" />
          <ellipse cx="150" cy="530" rx="50" ry="15" fill="#ff6b6b" />

          {/* Water in bucket */}
          <ellipse cx="150" cy="545" rx="42" ry="12" fill="#87ceeb" opacity="0.7" />
          <ellipse cx="150" cy="545" rx="35" ry="9" fill="#b0e0e6" opacity="0.6" />

          {/* Soapy bubbles */}
          <circle cx="135" cy="542" r="5" fill="#fff" opacity="0.8" />
          <circle cx="155" cy="540" r="6" fill="#fff" opacity="0.7" />
          <circle cx="145" cy="548" r="4" fill="#fff" opacity="0.8" />
          <circle cx="165" cy="545" r="5" fill="#fff" opacity="0.7" />

          {/* Bubbles floating around */}
          <circle cx="320" cy="420" r="8" fill="#fff" opacity="0.5" stroke="#e0f7fa" strokeWidth="2" />
          <circle cx="325" cy="422" r="3" fill="#fff" opacity="0.8" />

          <circle cx="400" cy="380" r="10" fill="#fff" opacity="0.4" stroke="#e0f7fa" strokeWidth="2" />
          <circle cx="404" cy="382" r="4" fill="#fff" opacity="0.8" />

          <circle cx="280" cy="500" r="6" fill="#fff" opacity="0.5" stroke="#e0f7fa" strokeWidth="1.5" />
          <circle cx="283" cy="501" r="2.5" fill="#fff" opacity="0.8" />

          <circle cx="380" cy="520" r="7" fill="#fff" opacity="0.4" stroke="#e0f7fa" strokeWidth="2" />
          <circle cx="383" cy="522" r="3" fill="#fff" opacity="0.7" />

          <circle cx="190" cy="460" r="9" fill="#fff" opacity="0.5" stroke="#e0f7fa" strokeWidth="2" />
          <circle cx="194" cy="462" r="3.5" fill="#fff" opacity="0.8" />

          {/* Additional shine streaks on bike */}
          <line x1="500" y1="440" x2="520" y2="430" stroke="#fff" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
          <line x1="590" y1="445" x2="605" y2="440" stroke="#fff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
          <line x1="435" y1="565" x2="455" y2="555" stroke="#fff" strokeWidth="2" opacity="0.4" strokeLinecap="round" />

          {/* Gradients */}
          <defs>
            <radialGradient id="lightGradient">
              <stop offset="0%" stopColor="#fff9e6" />
              <stop offset="100%" stopColor="#2d2d2d" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <p className="text-center text-gray-300 mt-6 text-lg">
          Taking care of my ride - Honda 350cc
        </p>
      </div>
    </div>
  );
}
