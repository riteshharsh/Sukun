const quizData = [
/* ===== EASY LEVEL â€“ BLOCK 1 ===== */

{ q: "Varun Dhawan ki debut film kaun si thi?", a: "Student of the Year", b: "ABCD 2", correct: 0, level: "easy" },
{ q: "Badrinath Ki Dulhania me Varun ka naam kya tha?", a: "Badri", b: "Rohan", correct: 0, level: "easy" },
{ q: "Main Tera Hero kis saal release hui?", a: "2014", b: "2018", correct: 0, level: "easy" },
{ q: "ABCD 2 me Varun ne kya role kiya?", a: "Dancer", b: "Police", correct: 0, level: "easy" },
{ q: "Kalank me Varun ka character naam?", a: "Zafar", b: "Arjun", correct: 0, level: "easy" },
{ q: "Humpty Sharma Ki Dulhania ki heroine kaun thi?", a: "Alia Bhatt", b: "Kareena Kapoor", correct: 0, level: "easy" },
{ q: "Street Dancer 3D me Varun ke opposite kaun thi?", a: "Shraddha Kapoor", b: "Deepika Padukone", correct: 0, level: "easy" },
{ q: "Coolie No.1 remake kis saal aayi?", a: "2020", b: "2012", correct: 0, level: "easy" },
{ q: "October film ka genre kya tha?", a: "Romantic Drama", b: "Horror", correct: 0, level: "easy" },
{ q: "Dishoom me Varun ka character ka naam kya tha?", a: "Junaid", b: "Raghu", correct: 0, level: "easy" },

{ q: "Varun Dhawan ke father ka naam kya hai?", a: "David Dhawan", b: "Mahesh Bhatt", correct: 0, level: "easy" },
{ q: "Student of the Year me Varun ka character?", a: "Rohan", b: "Kabir", correct: 0, level: "easy" },
{ q: "Judwaa 2 me Varun ne kitne roles kiye?", a: "2", b: "1", correct: 0, level: "easy" },
{ q: "Badlapur me Varun ka character naam?", a: "Raghu", b: "Aman", correct: 0, level: "easy" },
{ q: "Varun Dhawan ka janam saal kya hai?", a: "1987", b: "1995", correct: 0, level: "easy" },

{ q: "JugJugg Jeeyo me Varun ka naam?", a: "Kuku", b: "Ravi", correct: 0, level: "easy" },
{ q: "ABCD 2 kis cheez par based thi?", a: "Dance Competition", b: "Cricket", correct: 0, level: "easy" },
{ q: "Humpty Sharma film ka director kaun tha?", a: "Shashank Khaitan", b: "Rohit Shetty", correct: 0, level: "easy" },
{ q: "Kalank me Varun kis profession me tha?", a: "Blacksmith", b: "Doctor", correct: 0, level: "easy" },
{ q: "Street Dancer 3D ka main theme kya tha?", a: "Dance Battle", b: "War Story", correct: 0, level: "easy" },

{ q: "Varun Dhawan ne pehli film kis banner ke under ki?", a: "Dharma Productions", b: "YRF", correct: 0, level: "easy" },
{ q: "Main Tera Hero me Varun ka character?", a: "Seenu", b: "Rahul", correct: 0, level: "easy" },
{ q: "Judwaa 2 original film kis actor ki thi?", a: "Salman Khan", b: "Aamir Khan", correct: 0, level: "easy" },
{ q: "Badlapur ka genre kya tha?", a: "Thriller", b: "Comedy", correct: 0, level: "easy" },
{ q: "Varun Dhawan ki wife ka naam kya hai?", a: "Natasha Dalal", b: "Alia Bhatt", correct: 0, level: "easy" },

{ q: "Coolie No.1 me heroine kaun thi?", a: "Sara Ali Khan", b: "Kriti Sanon", correct: 0, level: "easy" },
{ q: "October film me Varun ka naam kya tha?", a: "Dan", b: "Raj", correct: 0, level: "easy" },
{ q: "Dishoom me Varun ka role kya tha?", a: "Cop", b: "Singer", correct: 0, level: "easy" },
{ q: "Humpty Sharma Ki Dulhania ka setting kis city me tha?", a: "Delhi", b: "Mumbai", correct: 0, level: "easy" },
{ q: "Street Dancer 3D me Varun ka dance group ka naam?", a: "Street Team", b: "Royal Squad", correct: 0, level: "easy" },

{ q: "Kalank film kis era me set thi?", a: "1940s", b: "2000s", correct: 0, level: "easy" },
{ q: "Student of the Year me competition kya tha?", a: "Trophy Contest", b: "Dance Show", correct: 0, level: "easy" },
{ q: "Varun Dhawan ka nickname kya hai?", a: "VD", b: "VK", correct: 0, level: "easy" },
{ q: "Badlapur me revenge kis wajah se tha?", a: "Family murder", b: "Money loss", correct: 0, level: "easy" },
{ q: "Judwaa 2 ka genre?", a: "Comedy", b: "Horror", correct: 0, level: "easy" },

{ q: "ABCD 2 me dance kis country me final hua?", a: "USA", b: "India", correct: 0, level: "easy" },
{ q: "Main Tera Hero me heroine kaun thi?", a: "Ileana D'Cruz", b: "Kareena Kapoor", correct: 0, level: "easy" },
{ q: "Humpty Sharma Ki Dulhania ka sequel kya tha?", a: "Badrinath Ki Dulhania", b: "Judwaa 2", correct: 0, level: "easy" },
{ q: "Varun Dhawan ne kis film me double role kiya?", a: "Judwaa 2", b: "Badlapur", correct: 0, level: "easy" },
{ q: "Kalank film ka music director kaun tha?", a: "Pritam", b: "AR Rahman", correct: 0, level: "easy" },

{ q: "Street Dancer 3D me final battle kis theme pe thi?", a: "India vs UK", b: "Solo Dance", correct: 0, level: "easy" },
{ q: "Varun Dhawan ne pehle assistant director kis film me kaam kiya?", a: "My Name is Khan", b: "3 Idiots", correct: 0, level: "easy" },
{ q: "Badlapur me Varun ka character kis sheher ka tha?", a: "Pune", b: "Delhi", correct: 0, level: "easy" },
{ q: "JugJugg Jeeyo ka main theme kya tha?", a: "Marriage Issues", b: "War Story", correct: 0, level: "easy" },
{ q: "Coolie No.1 me Varun ka character naam?", a: "Raju", b: "Vijay", correct: 0, level: "easy" },

{ q: "October film ka mood kya tha?", a: "Emotional", b: "Action", correct: 0, level: "easy" },
{ q: "Dishoom film ka setting kis city me tha?", a: "Abu Dhabi", b: "Delhi", correct: 0, level: "easy" },
{ q: "Varun Dhawan ki first co-star kaun thi?", a: "Alia Bhatt", b: "Deepika Padukone", correct: 0, level: "easy" },
{ q: "ABCD 2 me Varun ka dance style?", a: "Hip Hop", b: "Classical", correct: 0, level: "easy" },
{ q: "Judwaa 2 me villain ka naam?", a: "Alex", b: "Rohit", correct: 0, level: "easy" },
/* ===== MEDIUM LEVEL â€“ BLOCK 2 ===== */

{ q: "Badlapur film ka director kaun tha?", a: "Sriram Raghavan", b: "Rohit Shetty", correct: 0, level: "medium" },
{ q: "October film me female lead kaun thi?", a: "Banita Sandhu", b: "Alia Bhatt", correct: 0, level: "medium" },
{ q: "Street Dancer 3D kis franchise ka part hai?", a: "ABCD Universe", b: "Dhoom Series", correct: 0, level: "medium" },
{ q: "Humpty Sharma Ki Dulhania kis saal release hui?", a: "2014", b: "2016", correct: 0, level: "medium" },
{ q: "Kalank me Varun ka profession kya tha?", a: "Lohar (Blacksmith)", b: "Lawyer", correct: 0, level: "medium" },

{ q: "Judwaa 2 kis film ka remake thi?", a: "Judwaa (1997)", b: "Partner", correct: 0, level: "medium" },
{ q: "Dishoom me John Abraham ka role kya tha?", a: "Cop", b: "Singer", correct: 0, level: "medium" },
{ q: "Main Tera Hero ka director kaun tha?", a: "David Dhawan", b: "Karan Johar", correct: 0, level: "medium" },
{ q: "Varun Dhawan ka full naam kya hai?", a: "Varun David Dhawan", b: "Varun Raj Dhawan", correct: 0, level: "medium" },
{ q: "Student of the Year me competition ka naam kya tha?", a: "SOTY Trophy", b: "Dance Mania", correct: 0, level: "medium" },

{ q: "Badlapur me villain ka naam kya tha?", a: "Liyaqat", b: "Rajesh", correct: 0, level: "medium" },
{ q: "October film kis festival me premiere hui thi?", a: "Shanghai Film Festival", b: "Cannes", correct: 0, level: "medium" },
{ q: "Street Dancer 3D me India team ka leader kaun tha?", a: "Sahej (Varun)", b: "Rohan", correct: 0, level: "medium" },
{ q: "Coolie No.1 remake ka director kaun tha?", a: "David Dhawan", b: "Farah Khan", correct: 0, level: "medium" },
{ q: "Humpty Sharma film me Alia ka character naam?", a: "Kavya", b: "Naina", correct: 0, level: "medium" },

{ q: "Kalank film ka backdrop kis city me tha?", a: "Lahore", b: "Mumbai", correct: 0, level: "medium" },
{ q: "Dishoom me cricket player ka naam kya tha?", a: "Viraj Sharma", b: "Rohit Singh", correct: 0, level: "medium" },
{ q: "Main Tera Hero me Varun ka nickname kya tha?", a: "Seenu", b: "Raju", correct: 0, level: "medium" },
{ q: "Judwaa 2 me heroine 1 ka naam?", a: "Samara", b: "Kriti", correct: 0, level: "medium" },
{ q: "Badlapur ka main theme kya tha?", a: "Revenge", b: "Comedy", correct: 0, level: "medium" },

{ q: "Varun Dhawan ne kis college se padhaai ki?", a: "Nottingham Trent University", b: "Delhi University", correct: 0, level: "medium" },
{ q: "Student of the Year ka director kaun tha?", a: "Karan Johar", b: "Imtiaz Ali", correct: 0, level: "medium" },
{ q: "October film me Varun ka kaam kya tha?", a: "Hotel Intern", b: "Doctor", correct: 0, level: "medium" },
{ q: "Street Dancer 3D me UK team ka leader kaun thi?", a: "Inayat", b: "Pooja", correct: 0, level: "medium" },
{ q: "Coolie No.1 me Sara ka character naam?", a: "Sara Rozario", b: "Meera", correct: 0, level: "medium" },

{ q: "Kalank film me Aditya Roy Kapur ka role?", a: "Dev", b: "Raj", correct: 0, level: "medium" },
{ q: "Humpty Sharma Ki Dulhania me shaadi kis sheher me plan thi?", a: "Ambala", b: "Delhi", correct: 0, level: "medium" },
{ q: "Judwaa 2 me Varun ka doosra character naam?", a: "Prem", b: "Raj", correct: 0, level: "medium" },
{ q: "Badlapur me Varun ka beta ka naam?", a: "Robin", b: "Aman", correct: 0, level: "medium" },
{ q: "Dishoom ka music director kaun tha?", a: "Pritam", b: "Anu Malik", correct: 0, level: "medium" },

{ q: "Main Tera Hero film kis genre ki thi?", a: "Romantic Comedy", b: "Horror", correct: 0, level: "medium" },
{ q: "October film ka ending kis tone me tha?", a: "Bittersweet", b: "Happy", correct: 0, level: "medium" },
{ q: "Street Dancer 3D me final performance kis country ke khilaf tha?", a: "UK", b: "USA", correct: 0, level: "medium" },
{ q: "Coolie No.1 original film ka hero kaun tha?", a: "Govinda", b: "Anil Kapoor", correct: 0, level: "medium" },
{ q: "Kalank film ka music kisne diya?", a: "Pritam", b: "Vishal-Shekhar", correct: 0, level: "medium" },

{ q: "Student of the Year me Varun ka rival kaun tha?", a: "Abhimanyu (Sid)", b: "Raj", correct: 0, level: "medium" },
{ q: "Badlapur me Nawazuddin ka character naam?", a: "Liyaqat", b: "Kabir", correct: 0, level: "medium" },
{ q: "Humpty Sharma film ka climax kis jagah tha?", a: "Ambala", b: "Goa", correct: 0, level: "medium" },
{ q: "Street Dancer 3D me Varun ka dream kya tha?", a: "Dance Championship Jeetna", b: "Actor banna", correct: 0, level: "medium" },
{ q: "Dishoom me Varun ka undercover naam?", a: "Junaid", b: "Ravi", correct: 0, level: "medium" },

{ q: "October film me female lead coma me thi?", a: "Yes", b: "No", correct: 0, level: "medium" },
{ q: "Coolie No.1 remake OTT pe release hui?", a: "Yes", b: "No", correct: 0, level: "medium" },
{ q: "Kalank film period drama thi?", a: "Yes", b: "No", correct: 0, level: "medium" },
{ q: "Judwaa 2 me twin characters the?", a: "Yes", b: "No", correct: 0, level: "medium" },
{ q: "Main Tera Hero me Varun ne college student ka role kiya?", a: "Yes", b: "No", correct: 0, level: "medium" },
  /* ===== HARD LEVEL â€“ BLOCK 3 ===== */

{ q: "Badlapur me Raghu ki wife ka naam kya tha?", a: "Misha", b: "Riya", correct: 0, level: "hard" },
{ q: "October film me Dan kis department me intern tha?", a: "Hotel Management", b: "Law", correct: 0, level: "hard" },
{ q: "Kalank me Varun ka character kis parivar se tha?", a: "Muslim family", b: "Royal family", correct: 0, level: "hard" },
{ q: "Street Dancer 3D me Sahej kis city se tha?", a: "Punjab (Amritsar)", b: "Mumbai", correct: 0, level: "hard" },
{ q: "Dishoom me cricket match fixing ka mastermind kaun tha?", a: "Wagah", b: "Kabir", correct: 0, level: "hard" },

{ q: "Humpty Sharma Ki Dulhania me Kavya ki shaadi kis se hone wali thi?", a: "Angad", b: "Rohan", correct: 0, level: "hard" },
{ q: "Judwaa 2 me Prem ka kaam kya tha?", a: "Singer", b: "Doctor", correct: 0, level: "hard" },
{ q: "Coolie No.1 remake me Varun ka disguise kya tha?", a: "Rich Businessman", b: "Police Officer", correct: 0, level: "hard" },
{ q: "Student of the Year me final trophy kis event me jeeti jati thi?", a: "Triathlon style competition", b: "Dance Battle", correct: 0, level: "hard" },
{ q: "Badlapur me Raghu ne revenge kitne saal baad liya?", a: "15 years", b: "5 years", correct: 0, level: "hard" },

{ q: "October film me female lead ka naam kya tha?", a: "Shiuli", b: "Pooja", correct: 0, level: "hard" },
{ q: "Kalank me Zafar ka asli talent kya tha?", a: "Blacksmith + Poet soul", b: "Singer", correct: 0, level: "hard" },
{ q: "Street Dancer 3D me final competition ka naam kya tha?", a: "Ground Zero", b: "Dance India", correct: 0, level: "hard" },
{ q: "Dishoom me Viraj ka kidnapping motive kya tha?", a: "Match fixing expose", b: "Personal revenge", correct: 0, level: "hard" },
{ q: "Main Tera Hero me Varun ka character kis sheher se tha?", a: "Ooty", b: "Delhi", correct: 0, level: "hard" },

{ q: "Humpty Sharma me Delhi trip ka main purpose kya tha?", a: "Shopping for wedding", b: "College admission", correct: 0, level: "hard" },
{ q: "Judwaa 2 me Raja ka personality type kya tha?", a: "Tapori style", b: "Serious introvert", correct: 0, level: "hard" },
{ q: "Coolie No.1 me Varun ne kis identity ka natak kiya?", a: "Crorepati businessman", b: "Politician", correct: 0, level: "hard" },
{ q: "Student of the Year me Varun ka best friend kaun tha?", a: "Abhimanyu", b: "Angad", correct: 0, level: "hard" },
{ q: "Badlapur me Nawaz ka character kya kaam karta tha?", a: "Bank Robber", b: "Teacher", correct: 0, level: "hard" },

{ q: "October film me Dan ka emotional turning point kya tha?", a: "Shiuli ka coma", b: "Job loss", correct: 0, level: "hard" },
{ q: "Kalank me Dev ka relation Zafar se kya tha?", a: "Love Rival", b: "Brother", correct: 0, level: "hard" },
{ q: "Street Dancer 3D me Sahej ka main rival kaun tha?", a: "Inayat", b: "Kabir", correct: 0, level: "hard" },
{ q: "Dishoom ka climax kis jagah set tha?", a: "Cricket Stadium", b: "Hotel", correct: 0, level: "hard" },
{ q: "Main Tera Hero me Seenu ka asli naam kya tha?", a: "Srinivas", b: "Rohan", correct: 0, level: "hard" },

{ q: "Humpty Sharma me Kavya ke father ka profession kya tha?", a: "Army Officer", b: "Businessman", correct: 0, level: "hard" },
{ q: "Judwaa 2 me twins ka childhood kaise separate hua?", a: "Kidnapping", b: "Hospital mix-up", correct: 0, level: "hard" },
{ q: "Coolie No.1 me fake identity kis ne suggest ki?", a: "Friend", b: "Police", correct: 0, level: "hard" },
{ q: "Student of the Year ka school ka naam?", a: "St. Teresa", b: "Delhi Public School", correct: 0, level: "hard" },
{ q: "Badlapur me Raghu ka profession kya tha?", a: "Bank Employee", b: "Lawyer", correct: 0, level: "hard" },

{ q: "October film ka background kis sheher me tha?", a: "Delhi", b: "Mumbai", correct: 0, level: "hard" },
{ q: "Kalank me Roop ka role kisne kiya?", a: "Alia Bhatt", b: "Shraddha Kapoor", correct: 0, level: "hard" },
{ q: "Street Dancer 3D me Sahej ka dream kya tha?", a: "World Dance Championship", b: "Film Actor", correct: 0, level: "hard" },
{ q: "Dishoom me Kabir ka role kisne kiya?", a: "John Abraham", b: "Akshay Kumar", correct: 0, level: "hard" },
{ q: "Main Tera Hero me villain ka naam kya tha?", a: "Angad", b: "Ravi", correct: 0, level: "hard" },

{ q: "Humpty Sharma me Kavya ka dream kya tha?", a: "Apni pasand ki shaadi", b: "Foreign job", correct: 0, level: "hard" },
{ q: "Judwaa 2 me Raja ka love interest kaun thi?", a: "Alishka", b: "Kavya", correct: 0, level: "hard" },
{ q: "Coolie No.1 remake me OTT platform kaun sa tha?", a: "Amazon Prime", b: "Netflix", correct: 0, level: "hard" },
{ q: "Student of the Year me Varun ka final exam result kya tha?", a: "He lost trophy", b: "He won easily", correct: 0, level: "hard" },
{ q: "Badlapur me Raghu ne akhir me kya kiya?", a: "Forgive", b: "Kill", correct: 0, level: "hard" },

{ q: "October film ka ending type kya tha?", a: "Open ended", b: "Happy ending", correct: 0, level: "hard" },
{ q: "Kalank me Zafar ka ultimate sacrifice kya tha?", a: "Save Roop", b: "Escape alone", correct: 0, level: "hard" },
{ q: "Street Dancer 3D me Sahej ki maa ka role kisne kiya?", a: "Amrita Singh", b: "Kajol", correct: 0, level: "hard" },
{ q: "Dishoom me main villain ka naam kya tha?", a: "Wagah", b: "Rohan", correct: 0, level: "hard" },
{ q: "Main Tera Hero ka climax kis jagah hua?", a: "Temple", b: "Mall", correct: 0, level: "hard" },

{ q: "Humpty Sharma ka emotional conflict kya tha?", a: "Love vs Family Honor", b: "Career vs Money", correct: 0, level: "hard" },
{ q: "Judwaa 2 ka climax kis country me hua?", a: "UK", b: "India", correct: 0, level: "hard" },
{ q: "Coolie No.1 me Varun ka real profession kya tha?", a: "Coolie", b: "Doctor", correct: 0, level: "hard" },
{ q: "Student of the Year ka final winner kaun tha?", a: "Abhimanyu", b: "Rohan", correct: 0, level: "hard" },
{ q: "Badlapur me Raghu ka internal conflict kya tha?", a: "Revenge vs Humanity", b: "Money vs Love", correct: 0, level: "hard" },
  /* ===== FINAL MIXED LEVEL â€“ BLOCK 4 ===== */

{ q: "Varun Dhawan ne kis film me cameo appearance diya?", a: "Bombay Velvet", b: "Dhoom 3", correct: 0, level: "medium" },
{ q: "David Dhawan kaun si genre ke liye famous hain?", a: "Comedy", b: "Horror", correct: 0, level: "medium" },
{ q: "Varun Dhawan ki pehli film ka producer kaun tha?", a: "Karan Johar", b: "Aditya Chopra", correct: 0, level: "medium" },
{ q: "ABCD 2 ka final dance kis sheher me hua?", a: "Las Vegas", b: "London", correct: 0, level: "medium" },
{ q: "Street Dancer 3D me UK team ka naam kya tha?", a: "Rule Breakers", b: "Street Kings", correct: 0, level: "medium" },

{ q: "Badlapur me Raghu ka transformation kis wajah se hua?", a: "Family tragedy", b: "Job loss", correct: 0, level: "hard" },
{ q: "October film me Dan ka character kis type ka tha?", a: "Emotionally sensitive", b: "Aggressive", correct: 0, level: "hard" },
{ q: "Kalank ka budget approx kitna tha?", a: "80-100 crore", b: "20 crore", correct: 0, level: "hard" },
{ q: "Judwaa 2 me double role ka inspiration kis film se tha?", a: "Original Judwaa", b: "Partner", correct: 0, level: "hard" },
{ q: "Main Tera Hero me climax ka main conflict kya tha?", a: "Kidnapping drama", b: "Dance competition", correct: 0, level: "hard" },

{ q: "Varun Dhawan ne assistant director ke roop me kis director ke saath kaam kiya?", a: "Karan Johar", b: "Rohit Shetty", correct: 0, level: "medium" },
{ q: "Humpty Sharma Ki Dulhania ka soundtrack kisne compose kiya?", a: "Sachin-Jigar", b: "AR Rahman", correct: 0, level: "medium" },
{ q: "Street Dancer 3D ka message kya tha?", a: "Unity beyond borders", b: "Solo fame", correct: 0, level: "medium" },
{ q: "Coolie No.1 remake me comic element ka base kya tha?", a: "Identity confusion", b: "Time travel", correct: 0, level: "medium" },
{ q: "Badlapur ka tone kaisa tha?", a: "Dark & gritty", b: "Light comedy", correct: 0, level: "medium" },

{ q: "Student of the Year me final race kis event ka part thi?", a: "Triathlon", b: "Dance", correct: 0, level: "hard" },
{ q: "October film ka background music kaisa tha?", a: "Minimal & subtle", b: "Loud & dramatic", correct: 0, level: "hard" },
{ q: "Kalank ka main theme kya tha?", a: "Forbidden love", b: "War strategy", correct: 0, level: "hard" },
{ q: "Dishoom ka genre kya tha?", a: "Action Comedy", b: "Pure Romance", correct: 0, level: "medium" },
{ q: "JugJugg Jeeyo me central conflict kya tha?", a: "Marriage breakdown", b: "Political war", correct: 0, level: "medium" },

{ q: "Varun Dhawan ne kaun si film me serious revenge role kiya?", a: "Badlapur", b: "Judwaa 2", correct: 0, level: "easy" },
{ q: "Humpty Sharma Ki Dulhania me wedding kis tradition me thi?", a: "Punjabi", b: "Bengali", correct: 0, level: "easy" },
{ q: "Street Dancer 3D ka final slogan kya tha?", a: "India Wins", b: "Dance is Life", correct: 0, level: "medium" },
{ q: "Coolie No.1 me father ka role kisne kiya?", a: "Paresh Rawal", b: "Anil Kapoor", correct: 0, level: "medium" },
{ q: "Dishoom me chase sequence kis city me hua?", a: "Abu Dhabi", b: "Mumbai", correct: 0, level: "medium" },

{ q: "Badlapur me Raghu ka psychological state kya tha?", a: "Obsessed with revenge", b: "Carefree", correct: 0, level: "hard" },
{ q: "October film ka ending kya message deta hai?", a: "Unconditional love", b: "Revenge", correct: 0, level: "hard" },
{ q: "Kalank me Zafar ka character kya represent karta hai?", a: "Rebellion & passion", b: "Royal discipline", correct: 0, level: "hard" },
{ q: "Student of the Year ka campus ka naam?", a: "St. Teresa", b: "Modern Academy", correct: 0, level: "medium" },
{ q: "Judwaa 2 me climax fight kis setting me hua?", a: "Cruise ship", b: "College", correct: 0, level: "hard" },

{ q: "Main Tera Hero me Varun ka love interest kitni thi?", a: "2", b: "1", correct: 0, level: "easy" },
{ q: "Humpty Sharma film ka main emotional arc kya tha?", a: "Love vs Family honor", b: "Money vs Fame", correct: 0, level: "medium" },
{ q: "Street Dancer 3D me dance style ka mix kya tha?", a: "Hip hop + Freestyle", b: "Classical only", correct: 0, level: "medium" },
{ q: "Coolie No.1 remake me comedy ka primary source kya tha?", a: "Mistaken identity", b: "Magic powers", correct: 0, level: "medium" },
{ q: "Badlapur me Raghu ka ultimate lesson kya tha?", a: "Humanity matters", b: "Money matters", correct: 0, level: "hard" },

{ q: "October film me Dan ka growth arc kya tha?", a: "Immature to mature", b: "Happy to angry", correct: 0, level: "hard" },
{ q: "Kalank film ka visual tone kaisa tha?", a: "Grand & dramatic", b: "Minimalistic", correct: 0, level: "medium" },
{ q: "Dishoom me buddy dynamic kis style ka tha?", a: "Action-comic duo", b: "Romantic duo", correct: 0, level: "medium" },
{ q: "JugJugg Jeeyo ka central theme kya tha?", a: "Modern marriage struggles", b: "Sports rivalry", correct: 0, level: "medium" },
{ q: "Student of the Year me Varun ka ambition kya tha?", a: "Win trophy", b: "Become singer", correct: 0, level: "medium" },

{ q: "Judwaa 2 me Prem ka personality trait kya tha?", a: "Shy & innocent", b: "Aggressive", correct: 0, level: "hard" },
{ q: "Street Dancer 3D me emotional turning point kya tha?", a: "Team unity realization", b: "Money loss", correct: 0, level: "hard" },
{ q: "Badlapur ka climax morally kya show karta hai?", a: "Gray morality", b: "Pure heroism", correct: 0, level: "hard" },
{ q: "Humpty Sharma ka ending kis tone me tha?", a: "Happy emotional", b: "Tragic", correct: 0, level: "easy" },
{ q: "Coolie No.1 me Varun ka disguise kitne logon ko confuse karta hai?", a: "Entire family", b: "Only one person", correct: 0, level: "medium" },

{ q: "October film me love ka type kya tha?", a: "Silent & pure", b: "Filmy dramatic", correct: 0, level: "hard" },
{ q: "Kalank ka major criticism kya tha?", a: "Weak script", b: "No songs", correct: 0, level: "hard" },
{ q: "Dishoom ka pace kaisa tha?", a: "Fast", b: "Slow", correct: 0, level: "medium" },
{ q: "Street Dancer 3D ka emotional message kya tha?", a: "Unity beyond borders", b: "Individual fame", correct: 0, level: "medium" },
{ q: "Badlapur me Raghu ka final emotional state kya tha?", a: "Broken yet free", b: "Carefree", correct: 0, level: "hard" }

];
/***********************
  QUIZ DATA ABOVE
  (Tumhara 200 question wala array yahin rahega)
************************/


/***********************
      QUIZ ENGINE
************************/

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

// shuffle function
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// start quiz
function startQuiz(level = "easy") {

  const container = document.getElementById("module-content");
  if (!container) return;

  // filter by level
  shuffledQuestions = shuffleArray(
    quizData.filter(q => q.level === level)
  );

  currentQuestion = 0;
  score = 0;

  showQuestion();
}

// show question
function showQuestion() {

  const container = document.getElementById("module-content");
  const question = shuffledQuestions[currentQuestion];

  if (!question) {
    showResult();
    return;
  }

  container.innerHTML = `
    <div class="quiz-box">
      <h3>Question ${currentQuestion + 1} / ${shuffledQuestions.length}</h3>
      <p>${question.q}</p>
      <button onclick="selectAnswer(0)">${question.a}</button>
      <button onclick="selectAnswer(1)">${question.b}</button>
    </div>
  `;
}

// select answer
function selectAnswer(index) {

  if (index === shuffledQuestions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// show result
function showResult() {

  const container = document.getElementById("module-content");

  container.innerHTML = `
    <div class="quiz-box">
      <h2>Quiz Finished 🎉</h2>
      <p>Your Score: ${score} / ${shuffledQuestions.length}</p>
      <button onclick="startQuiz()">Play Again</button>
    </div>
  `;
}


// make global (IMPORTANT)
window.startQuiz = startQuiz;
