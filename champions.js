// 롤 챔피언 데이터
const champions = [
  // A
  { name: "Aatrox", nameKo: "아트록스", region: "다르킨", role: "전사", range: "근거리", resource: "없음", releaseYear: 2013 },
  { name: "Ahri", nameKo: "아리", region: "아이오니아", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Akali", nameKo: "아칼리", region: "아이오니아", role: "암살자", range: "근거리", resource: "기력", releaseYear: 2010 },
  { name: "Akshan", nameKo: "아크샨", region: "슈리마", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2021 },
  { name: "Alistar", nameKo: "알리스타", region: "룬테라", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Ambessa", nameKo: "암베사", region: "녹서스", role: "전사", range: "근거리", resource: "없음", releaseYear: 2024 },
  { name: "Amumu", nameKo: "아무무", region: "슈리마", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Anivia", nameKo: "애니비아", region: "프렐요드", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Annie", nameKo: "애니", region: "녹서스", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Aphelios", nameKo: "아펠리오스", region: "타곤", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2019 },
  { name: "Ashe", nameKo: "애쉬", region: "프렐요드", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Aurelion Sol", nameKo: "아우렐리온 솔", region: "타곤", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2016 },
  { name: "Aurora", nameKo: "오로라", region: "프렐요드", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2024 },
  { name: "Azir", nameKo: "아지르", region: "슈리마", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2014 },

  // B
  { name: "Bard", nameKo: "바드", region: "룬테라", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2015 },
  { name: "Bel'Veth", nameKo: "벨베스", region: "공허", role: "전사", range: "근거리", resource: "없음", releaseYear: 2022 },
  { name: "Blitzcrank", nameKo: "블리츠크랭크", region: "자운", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Brand", nameKo: "브랜드", region: "룬테라", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Braum", nameKo: "브라움", region: "프렐요드", role: "서포터", range: "근거리", resource: "마나", releaseYear: 2014 },
  { name: "Briar", nameKo: "브라이어", region: "녹서스", role: "전사", range: "근거리", resource: "없음", releaseYear: 2023 },

  // C
  { name: "Caitlyn", nameKo: "케이틀린", region: "필트오버", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Camille", nameKo: "카밀", region: "필트오버", role: "전사", range: "근거리", resource: "마나", releaseYear: 2016 },
  { name: "Cassiopeia", nameKo: "카시오페아", region: "녹서스", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2010 },
  { name: "Cho'Gath", nameKo: "초가스", region: "공허", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Corki", nameKo: "코르키", region: "반들시티", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2009 },

  // D
  { name: "Darius", nameKo: "다리우스", region: "녹서스", role: "전사", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Diana", nameKo: "다이애나", region: "타곤", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Dr. Mundo", nameKo: "문도 박사", region: "자운", role: "전사", range: "근거리", resource: "체력", releaseYear: 2009 },
  { name: "Draven", nameKo: "드레이븐", region: "녹서스", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2012 },

  // E
  { name: "Ekko", nameKo: "에코", region: "자운", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2015 },
  { name: "Elise", nameKo: "엘리스", region: "녹서스", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2012 },
  { name: "Evelynn", nameKo: "이블린", region: "룬테라", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Ezreal", nameKo: "이즈리얼", region: "필트오버", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2010 },

  // F
  { name: "Fiddlesticks", nameKo: "피들스틱", region: "룬테라", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Fiora", nameKo: "피오라", region: "데마시아", role: "전사", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Fizz", nameKo: "피즈", region: "빌지워터", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2011 },

  // G
  { name: "Galio", nameKo: "갈리오", region: "데마시아", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2010 },
  { name: "Gangplank", nameKo: "갱플랭크", region: "빌지워터", role: "전사", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Garen", nameKo: "가렌", region: "데마시아", role: "전사", range: "근거리", resource: "없음", releaseYear: 2010 },
  { name: "Gnar", nameKo: "나르", region: "프렐요드", role: "전사", range: "원거리", resource: "분노", releaseYear: 2014 },
  { name: "Gragas", nameKo: "그라가스", region: "프렐요드", role: "마법사", range: "근거리", resource: "마나", releaseYear: 2010 },
  { name: "Graves", nameKo: "그레이브즈", region: "빌지워터", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Gwen", nameKo: "그웬", region: "그림자 군도", role: "전사", range: "근거리", resource: "마나", releaseYear: 2021 },

  // H
  { name: "Hecarim", nameKo: "헤카림", region: "그림자 군도", role: "전사", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Heimerdinger", nameKo: "하이머딩거", region: "필트오버", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Hwei", nameKo: "흐웨이", region: "아이오니아", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2023 },

  // I
  { name: "Illaoi", nameKo: "일라오이", region: "빌지워터", role: "전사", range: "근거리", resource: "마나", releaseYear: 2015 },
  { name: "Irelia", nameKo: "이렐리아", region: "아이오니아", role: "전사", range: "근거리", resource: "마나", releaseYear: 2010 },
  { name: "Ivern", nameKo: "아이번", region: "아이오니아", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2016 },

  // J
  { name: "Janna", nameKo: "잔나", region: "자운", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Jarvan IV", nameKo: "자르반 4세", region: "데마시아", role: "전사", range: "근거리", resource: "마나", releaseYear: 2011 },
  { name: "Jax", nameKo: "잭스", region: "룬테라", role: "전사", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Jayce", nameKo: "제이스", region: "필트오버", role: "전사", range: "원거리", resource: "마나", releaseYear: 2012 },
  { name: "Jhin", nameKo: "진", region: "아이오니아", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2016 },
  { name: "Jinx", nameKo: "징크스", region: "자운", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2013 },

  // K
  { name: "K'Sante", nameKo: "크산테", region: "슈리마", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2022 },
  { name: "Kai'Sa", nameKo: "카이사", region: "공허", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2018 },
  { name: "Kalista", nameKo: "칼리스타", region: "그림자 군도", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2014 },
  { name: "Karma", nameKo: "카르마", region: "아이오니아", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Karthus", nameKo: "카서스", region: "그림자 군도", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Kassadin", nameKo: "카사딘", region: "공허", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Katarina", nameKo: "카타리나", region: "녹서스", role: "암살자", range: "근거리", resource: "없음", releaseYear: 2009 },
  { name: "Kayle", nameKo: "케일", region: "데마시아", role: "전사", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Kayn", nameKo: "케인", region: "아이오니아", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2017 },
  { name: "Kennen", nameKo: "케넨", region: "아이오니아", role: "마법사", range: "원거리", resource: "기력", releaseYear: 2010 },
  { name: "Kha'Zix", nameKo: "카직스", region: "공허", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Kindred", nameKo: "킨드레드", region: "룬테라", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2015 },
  { name: "Kled", nameKo: "클레드", region: "녹서스", role: "전사", range: "근거리", resource: "없음", releaseYear: 2016 },
  { name: "Kog'Maw", nameKo: "코그모", region: "공허", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2010 },

  // L
  { name: "LeBlanc", nameKo: "르블랑", region: "녹서스", role: "암살자", range: "원거리", resource: "마나", releaseYear: 2010 },
  { name: "Lee Sin", nameKo: "리 신", region: "아이오니아", role: "전사", range: "근거리", resource: "기력", releaseYear: 2011 },
  { name: "Leona", nameKo: "레오나", region: "타곤", role: "서포터", range: "근거리", resource: "마나", releaseYear: 2011 },
  { name: "Lillia", nameKo: "릴리아", region: "아이오니아", role: "마법사", range: "근거리", resource: "마나", releaseYear: 2020 },
  { name: "Lissandra", nameKo: "리산드라", region: "프렐요드", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2013 },
  { name: "Lucian", nameKo: "루시안", region: "데마시아", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2013 },
  { name: "Lulu", nameKo: "룰루", region: "반들시티", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2012 },
  { name: "Lux", nameKo: "럭스", region: "데마시아", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2010 },

  // M
  { name: "Malphite", nameKo: "말파이트", region: "룬테라", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Malzahar", nameKo: "말자하", region: "공허", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2010 },
  { name: "Maokai", nameKo: "마오카이", region: "그림자 군도", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2011 },
  { name: "Master Yi", nameKo: "마스터 이", region: "아이오니아", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Milio", nameKo: "밀리오", region: "익스탈", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2023 },
  { name: "Miss Fortune", nameKo: "미스 포츈", region: "빌지워터", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2010 },
  { name: "Mordekaiser", nameKo: "모데카이저", region: "녹서스", role: "전사", range: "근거리", resource: "보호막", releaseYear: 2010 },
  { name: "Morgana", nameKo: "모르가나", region: "데마시아", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Mell medarda", nameKo: "멜 메다르다", region: "녹서스", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2025 },
  
  // N
  { name: "Naafiri", nameKo: "나피리", region: "슈리마", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2023 },
  { name: "Nami", nameKo: "나미", region: "빌지워터", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2012 },
  { name: "Nasus", nameKo: "나서스", region: "슈리마", role: "전사", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Nautilus", nameKo: "노틸러스", region: "빌지워터", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Neeko", nameKo: "니코", region: "익스탈", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2018 },
  { name: "Nidalee", nameKo: "니달리", region: "익스탈", role: "암살자", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Nilah", nameKo: "닐라", region: "빌지워터", role: "전사", range: "근거리", resource: "마나", releaseYear: 2022 },
  { name: "Nocturne", nameKo: "녹턴", region: "룬테라", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2011 },
  { name: "Nunu & Willump", nameKo: "누누와 윌럼프", region: "프렐요드", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },

  // O
  { name: "Olaf", nameKo: "올라프", region: "프렐요드", role: "전사", range: "근거리", resource: "마나", releaseYear: 2010 },
  { name: "Orianna", nameKo: "오리아나", region: "필트오버", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Ornn", nameKo: "오른", region: "프렐요드", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2017 },

  // P
  { name: "Pantheon", nameKo: "판테온", region: "타곤", role: "전사", range: "근거리", resource: "마나", releaseYear: 2010 },
  { name: "Poppy", nameKo: "뽀삐", region: "데마시아", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2010 },
  { name: "Pyke", nameKo: "파이크", region: "빌지워터", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2018 },

  // Q
  { name: "Qiyana", nameKo: "키아나", region: "익스탈", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2019 },
  { name: "Quinn", nameKo: "퀸", region: "데마시아", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2013 },

  // R
  { name: "Rakan", nameKo: "라칸", region: "아이오니아", role: "서포터", range: "근거리", resource: "마나", releaseYear: 2017 },
  { name: "Rammus", nameKo: "람머스", region: "슈리마", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Rek'Sai", nameKo: "렉사이", region: "공허", role: "전사", range: "근거리", resource: "분노", releaseYear: 2014 },
  { name: "Rell", nameKo: "렐", region: "녹서스", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2020 },
  { name: "Renata Glasc", nameKo: "레나타 글라스크", region: "자운", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2022 },
  { name: "Renekton", nameKo: "레넥톤", region: "슈리마", role: "전사", range: "근거리", resource: "분노", releaseYear: 2011 },
  { name: "Rengar", nameKo: "렝가", region: "익스탈", role: "암살자", range: "근거리", resource: "없음", releaseYear: 2012 },
  { name: "Riven", nameKo: "리븐", region: "녹서스", role: "전사", range: "근거리", resource: "없음", releaseYear: 2011 },
  { name: "Rumble", nameKo: "럼블", region: "반들시티", role: "마법사", range: "근거리", resource: "열기", releaseYear: 2011 },
  { name: "Ryze", nameKo: "라이즈", region: "룬테라", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },

  // S
  { name: "Samira", nameKo: "사미라", region: "녹서스", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2020 },
  { name: "Sejuani", nameKo: "세주아니", region: "프렐요드", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Senna", nameKo: "세나", region: "그림자 군도", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2019 },
  { name: "Seraphine", nameKo: "세라핀", region: "필트오버", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2020 },
  { name: "Sett", nameKo: "세트", region: "아이오니아", role: "전사", range: "근거리", resource: "없음", releaseYear: 2020 },
  { name: "Shaco", nameKo: "샤코", region: "룬테라", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Shen", nameKo: "쉔", region: "아이오니아", role: "탱커", range: "근거리", resource: "기력", releaseYear: 2010 },
  { name: "Shyvana", nameKo: "쉬바나", region: "데마시아", role: "전사", range: "근거리", resource: "분노", releaseYear: 2011 },
  { name: "Singed", nameKo: "신지드", region: "자운", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Sion", nameKo: "사이온", region: "녹서스", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Sivir", nameKo: "시비르", region: "슈리마", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Skarner", nameKo: "스카너", region: "슈리마", role: "탱커", range: "근거리", resource: "마나", releaseYear: 2011 },
  { name: "Smolder", nameKo: "스몰더", region: "룬테라", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2024 },
  { name: "Sona", nameKo: "소나", region: "데마시아", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2010 },
  { name: "Soraka", nameKo: "소라카", region: "타곤", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Swain", nameKo: "스웨인", region: "녹서스", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2010 },
  { name: "Sylas", nameKo: "사일러스", region: "데마시아", role: "마법사", range: "근거리", resource: "마나", releaseYear: 2019 },
  { name: "Syndra", nameKo: "신드라", region: "아이오니아", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2012 },

  // T
  { name: "Tahm Kench", nameKo: "탐 켄치", region: "빌지워터", role: "서포터", range: "근거리", resource: "마나", releaseYear: 2015 },
  { name: "Taliyah", nameKo: "탈리야", region: "슈리마", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2016 },
  { name: "Talon", nameKo: "탈론", region: "녹서스", role: "암살자", range: "근거리", resource: "마나", releaseYear: 2011 },
  { name: "Taric", nameKo: "타릭", region: "타곤", role: "서포터", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Teemo", nameKo: "티모", region: "반들시티", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Thresh", nameKo: "쓰레쉬", region: "그림자 군도", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2013 },
  { name: "Tristana", nameKo: "트리스타나", region: "반들시티", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Trundle", nameKo: "트런들", region: "프렐요드", role: "전사", range: "근거리", resource: "마나", releaseYear: 2010 },
  { name: "Tryndamere", nameKo: "트린다미어", region: "프렐요드", role: "전사", range: "근거리", resource: "분노", releaseYear: 2009 },
  { name: "Twisted Fate", nameKo: "트위스티드 페이트", region: "빌지워터", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Twitch", nameKo: "트위치", region: "자운", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2009 },

  // U
  { name: "Udyr", nameKo: "우디르", region: "프렐요드", role: "전사", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Urgot", nameKo: "우르곳", region: "자운", role: "전사", range: "원거리", resource: "마나", releaseYear: 2010 },

  // V
  { name: "Varus", nameKo: "바루스", region: "아이오니아", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2012 },
  { name: "Vayne", nameKo: "베인", region: "데마시아", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Veigar", nameKo: "베이가", region: "반들시티", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Vel'Koz", nameKo: "벨코즈", region: "공허", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2014 },
  { name: "Vex", nameKo: "벡스", region: "반들시티", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2021 },
  { name: "Vi", nameKo: "바이", region: "필트오버", role: "전사", range: "근거리", resource: "마나", releaseYear: 2012 },
  { name: "Viego", nameKo: "비에고", region: "그림자 군도", role: "암살자", range: "근거리", resource: "없음", releaseYear: 2021 },
  { name: "Viktor", nameKo: "빅토르", region: "자운", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Vladimir", nameKo: "블라디미르", region: "녹서스", role: "마법사", range: "원거리", resource: "체력", releaseYear: 2010 },
  { name: "Volibear", nameKo: "볼리베어", region: "프렐요드", role: "전사", range: "근거리", resource: "마나", releaseYear: 2011 },

  // W
  { name: "Warwick", nameKo: "워윅", region: "자운", role: "전사", range: "근거리", resource: "마나", releaseYear: 2009 },
  { name: "Wukong", nameKo: "오공", region: "아이오니아", role: "전사", range: "근거리", resource: "마나", releaseYear: 2011 },

  // X
  { name: "Xayah", nameKo: "자야", region: "아이오니아", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2017 },
  { name: "Xerath", nameKo: "제라스", region: "슈리마", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2011 },
  { name: "Xin Zhao", nameKo: "신 짜오", region: "데마시아", role: "전사", range: "근거리", resource: "마나", releaseYear: 2010 },

  // Y
  { name: "Yasuo", nameKo: "야스오", region: "아이오니아", role: "전사", range: "근거리", resource: "없음", releaseYear: 2013 },
  { name: "Yone", nameKo: "요네", region: "아이오니아", role: "암살자", range: "근거리", resource: "없음", releaseYear: 2020 },
  { name: "Yorick", nameKo: "요릭", region: "그림자 군도", role: "전사", range: "근거리", resource: "마나", releaseYear: 2011 },
  { name: "Yuumi", nameKo: "유미", region: "반들시티", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2019 },

  // Z
  { name: "Zac", nameKo: "자크", region: "자운", role: "탱커", range: "근거리", resource: "체력", releaseYear: 2013 },
  { name: "Zed", nameKo: "제드", region: "아이오니아", role: "암살자", range: "근거리", resource: "기력", releaseYear: 2012 },
  { name: "Zeri", nameKo: "제리", region: "자운", role: "원거리딜러", range: "원거리", resource: "마나", releaseYear: 2022 },
  { name: "Ziggs", nameKo: "직스", region: "자운", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2012 },
  { name: "Zilean", nameKo: "질리언", region: "룬테라", role: "서포터", range: "원거리", resource: "마나", releaseYear: 2009 },
  { name: "Zoe", nameKo: "조이", region: "타곤", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2017 },
  { name: "Zyra", nameKo: "자이라", region: "익스탈", role: "마법사", range: "원거리", resource: "마나", releaseYear: 2012 }
];
