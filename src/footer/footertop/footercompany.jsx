
function FooterCompany() {
    return (
      <div className="Footer-company">
        <div className="Company-present">
          <div className="Company-icon">
            <img
              className="company-photo"
              src="https://biboo.tecinus.vn/static/media/logo-tecinus.1eefe09f.png"
              alt=""
            />
          </div>

          <h2 className="Company-para">
            Công ty cổ phần Công nghệ và Truyền thông Tecinus
          </h2>
        </div>

        <p className="Company-paras">
          Giấy CNĐKKD: 0109847595 đăng ký lần đầu ngày 07/12/2021 cấp bởi Sở
          KHĐT Thành phố Hà Nội
        </p>

        <div className="Company-address">
          <div className="Company-address-detail">
            <div className="Company-address-icon">
              <img
                className="company-icons"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgBnVbrbcIwEHaCkOBfR2AENigjsEHZoN0ANmAE6AS0E9AN6AZhA+dfojwU7ot80oX4FU5ya3yP7+7z+SBRHum67q2u612apu9Jkqzp8wrntL/T/k7bb9L/LZfLu5oiCNy27b5pGk2rCy3YRgcvimJFDpkIcKW1wznbVFW1xhmti7DLpE1M8IzK30xMyA/ChvT/BppUpBhKbwxi9TWcuw3iQPoEqfLDQImymMsgjx4BpSaOHiRpLgzIPzZHk8BVdNXFlYix66gRvkaHAHIEt7WrtoFYk2Xu0H4Wh4vRnVE2gmLPLexICI2SySB9Vspe8uhuAMRV+HywT6XC0T05/iwWi5wPyrJku2C39QA0W/4N8tpi0+uo5COqQBLz+XxvEvp9NubHyTH58BDgdMoln0ZvwXCqjWLjAOG5A7urLbj3PYkqXnrJEOdL5irELDqqiQIfTtBpZMawnjrjxRzTwVFDIDvmkeRDhYN/sv1gPPhE3IcXBDq2s/IeC2KjS2Y+OXgIRHD+enAW8CpATmLyxnMeEgq2ffohoGO+ryGJihS032w222JPs+hMsyaP8XsAwLkr/O0KWMsAAAAASUVORK5CYII="
                alt=""
              />
            </div>

            <p className="Company-contents">
              Ô số e34 - Khu đấu giá 3ha - Phúc Diễn - Bắc Từ Liêm - Hà Nội
            </p>
          </div>
          <div className="Company-address-detail">
            <div className="Company-address-icon">
              <img
                className="company-icons"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgB7ZXfDYIwEMavAu+O4AhuJBuoE4gToBPIBo7ECPBGwp/U+wxHKmIoCD4Qv6SkbXrfD8jdleivkVJ4VFV10lofeLqmaZUqpSLHcY6KIWENmU3sf6ayLBMeuh5xlmUb+lJ5nm/5A2LDNyFjcZdNHKSRQqzx8uKpGxAOFUVxkTVrRwOFGIlnYIS9TlANC2QPSWIL4bN7iYOH7H8EjYHhTBekFzQEZkL4d71lby8I4kDfgIUdJjcjmfwuDytQDXvJIqxRArZZag2CYNyqi6bu+kphEEhgSFkAMVAKNsUt/kogrusqmkHiv6IfaZmgFJMpunZbhmeq0AH4crLuaWPEzfb6zDSkKsPQrSe/YQHxPC+gxekB4enuFzuT2i8AAAAASUVORK5CYII="
                alt=""
              />
            </div>

            <button className="Company-contents emails">tecinus@gmail.com</button>
          </div>
          <div className="Company-address-detail">
            <div className="Company-address-icon">
              <img
                className="company-icons"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgBtVXtbYMwED3CAozACIzACNmgbNB2gnaDZoN0g7QTJBt0hHQD8g+JL+ceOkcnCwcwyZMM5gz37huiJyPCxRiT9H3/ytuUV8YrYVk6vBBFuziO32kNuq47t21rfIvPvygUTdPkoggkRV3XWVVVKc6wtyRWFkzAVv55zndCcqQQIP6ioLxzXuIdGEMLseEkXnj98z4ZU4Bzvp2ELKWF2ODCFfQrz7n7Ait94dsWew7jiUKgEl0iJFaOxKrwfNIaIImuIn7eiuyH1mLMC59nwbBe6MaysuAy1dAxl+QOMtXpe/cbacZidgnzB282LE5HlyI/WDkTfzgjZT+r41nhtx0fmkR5clahG0j1PJucXUgoRodLgrsiN+JVMXYWTAJIdRVjlSV59I6eeyQ3a6dgvaC5UBN1MpHWA+SElkBV1+3f4TEmD+4bse6gieCR7oGHjBdYr3KjK+qo+qWgtYDlKE33nw7yh8wuDSgUwkzLr19XtP1Q7rQZAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>

            <p className="Company-contents">0986 955 542</p>
          </div>
        </div>
      </div>
    );
}

export default FooterCompany