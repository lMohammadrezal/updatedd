import React, { createContext, useState } from 'react';

// Create the Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language
  const [language, setLanguage] = useState('en');

  // Translations
  const translations = {
    en: {
        restoran:"Restoran",
        home:"HOME",
        about:"ABOUT",
        service:"SERVICE",
        menu:"MENU",
        pages:"PAGES",
        booking:"Booking",
        BOOKING:"BOOKING",
        our_team:"Our Team",
        testimonial:"Testimonial",
        contact:"CONTACT",
        team:"TEAM",
        book_a_table:"BOOK A TABLE",
        enjoy_our_delicious_meal:"Enjoy Our Delicious Meal",
        services:"Services",
        // ...............................
        // Service Component
        our_services:"Our Services",
        explore_our_services:"Explore Our Services",
        master_chefs:"Master Chefs",
        quality_food:"Quality Food",
        online_order:"Online Order",
        service_24_7:"24/7 Service",
        service_lorem:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        // ...................................
        // Contact Component
        contact_us:"Contact Us",
        contact_us_for_any_query:"Contact For Any Query",
        your_name:"Your Name",
        your_email:"Your Email",
        subject:"Subject",
        address:"Address",
        message:"Message",
        send_message:"SEND MESSAGE",
        name_is_required:"Name is required",
        email_is_required:"Email is required",
        subject_is_required:"Subject is required",
        address_is_required:"Address is required",
        message_is_required:"Message is required",

        // Testimonial Component
        our_client_say:"Our Clients Say",
        share_your_opinion:"Share Your Opinion",
        your_profession:"Your Profession",
        your_opinion:"Your Opinion",
        submit:"SUBMIT",
        //Sweat Alert for Testimonial
        profession_is_required:"Profession is required",
        comment_is_required:"Comment is required",
        success:"Success",
        your_testimonial_has_been_added:"Your testimonial has been added!",
        profession:"Profession",
        comment:"Comment",
        cool:"Cool",
        // Sweat Alert for Contact
        invalid_submission:"Invalid Submission",
        please_fill_all_required_fields_correctly:"Please fill all required fields correctly.",
        ok:"OK",
        submission_successful:"Submission Successful",
        name:"Name",
        email:"Email",
        // Team Component
        team_members:"Team Members",
        our_master_chefs:"Our Master Chefs",
        chef:"Chef",
        sous_chef:"Sous Chef",
        pastry_chef:"Pastry Chef",
        head_chef:"Head Chef",
        //About Component
        about_us:"About Us",
        years_of:"Years of",
        experience:"EXPERIENCE",
        popular:"Popular",
        read_more:"READ MORE",
        //‌Booking Component
        reservation:"Reservation",
        book_a_table_online:"Book A Table Online",
        date_and_time:"Date & Time",
        no_of_people:"No Of People",
        special_request:"Special Request",
        book_now:"BOOK NOW",
        //Sweat Alert for Booking
        reservation_saved:"Reservation Saved",
        your_reservation_has_been_saved_successfully:"Your reservation has been saved successfully!",
        date_and_time_is_required:"Date & Time is required",
        special_request_is_required:"Special request is required",
        //Menu Component
        food_menu:"Food Menu",
        most_popular_items:"Most Popular Items",
        search_for_menu_items:"Search for menu items...",
        
  

        //Food Names
        food_no_1:"Chicken Burger Deluxe",
        food_no_2:"Egg Sandwich Special",
        food_no_3:"Blueberry Pancakes",
        food_no_4:"Cinnamon French Toast",
        food_no_5:"Classic Avocado Toast",
        food_no_6:"Granola Cereal Bowl",
        food_no_7:"Fresh Fruit Salad",
        food_no_8:"Cheese Omelette",
        food_no_9:"Grilled Chicken Wrap",
        food_no_10:"Turkey Club Sandwich",
        food_no_11:"Caesar Salad",
        food_no_12:"Spaghetti Carbonara",
        food_no_13:"Beef Tacos",
        food_no_14:"Vegetarian Pizza",
        food_no_15:"BBQ Pulled Pork",
        food_no_16:"Mushroom Risotto",
        food_no_17:"Steak and Potatoes",
        food_no_18:"Lemon Herb Salmon",
        food_no_19:"Chicken Alfredo",
        food_no_20:"Vegetable Stir Fry",
        food_no_21:"Seafood Paella",
        food_no_22:"Lamb Chops",
        food_no_23:"Beef Wellington",
        food_no_24:"Shrimp Scampi",
        //SweatAlert for Menu
        your_rating_has_been_submitted:"Your rating has been submitted!",
        got_it:"Got it",
        menu_item_lorem:"Ipsum ipsum clita erat amet dolor justo diam",
        //Footer Component
        company:"Company",
        privacy_policy:"Privacy Policy",
        terms_and_condition:"Terms & Condition",
        contact1:"Contact",
        opening:"Opening",
        newsletter:"Newsletter",
        sign_up:"SIGN UP",
        home1:"Home",
        cookies:"Cookies",
        help:"Help",
        fqas:"FQAs",
        footer_lorem:"Dolor amet sit justo amet elitr clita ipsum elitr est.",
        footer_address:"123 Street, New York, USA",
        info_example: "info@example.com",
        number:"+012 345 67890"
        




        







        
      
    },
    fa: {
        restoran: "رستوران",
        home: "خانه",
        about: "درباره ما",
        service: "خدمات",
        menu: "منو",
        pages: "صفحات",
        booking: "رزرو",
        BOOKING:"رزرو",
        our_team: "تیم ما",
        testimonial: "توصیه‌ها",
        contact: "تماس",
        team:"تیم",
        book_a_table: "رزرو میز",
        enjoy_our_delicious_meal: "از وعده‌های خوشمزه ما لذت ببرید",
        services:"خدمات",
        // ...............................
        // Service Component    
        our_services: "خدمات ما",
        explore_our_services: "خدمات ما را کاوش کنید",
        master_chefs: "سرآشپزهای ماهر",
        quality_food: "غذای باکیفیت",
        online_order: "سفارش آنلاین",
        service_24_7: "خدمات ۲۴ ساعته",
        service_lorem: "این یک متن آزمایشی است که برای پر کردن فضای صفحه استفاده می‌شود",
        // ...................................
        // Contact Component
        contact_us: "تماس با ما",
        contact_us_for_any_query: "برای هر سوالی با ما تماس بگیرید",
        your_name: "نام شما",
        your_email: "ایمیل شما",
        subject: "موضوع",
        address: "آدرس",
        message: "پیام",
        send_message: "ارسال پیام",
        name_is_required: "وارد کردن نام الزامی است",
        email_is_required: "وارد کردن ایمیل الزامی است",
        subject_is_required: "وارد کردن موضوع الزامی است",
        address_is_required: "وارد کردن آدرس الزامی است",
        message_is_required: "وارد کردن پیام الزامی است",
        // Testimonial Component
        our_client_say: "مشتریان ما چه می‌گویند",
        share_your_opinion: "نظر خود را به اشتراک بگذارید",
        your_profession: "شغل شما",
        your_opinion: "نظر شما",
        submit: "ارسال",
        //Sweat Alert for Testimonial
        profession_is_required: "وارد کردن شغل الزامی است",
        comment_is_required: "وارد کردن نظر الزامی است",
        success: "موفقیت",
        your_testimonial_has_been_added: "!نظر شما با موفقیت ثبت شد",
        profession: "شغل",
        comment: "نظر",
        cool:"باشه",
        // Sweat Alert for Contact
        invalid_submission: "ارسال نامعتبر",
        please_fill_all_required_fields_correctly: "لطفاً تمام فیلدهای الزامی را به درستی پر کنید",
        ok: "باشه",
        submission_successful: "ارسال موفقیت‌آمیز",
        name:"نام",
        email:"ایمیل",
        // Team Component
        team_members: "اعضای تیم",
        our_master_chefs: "سرآشپزهای ماهر ما",
        chef: "سرآشپز",
        sous_chef: "کمک سرآشپز",
        pastry_chef: "سرآشپز شیرینی",
        head_chef: "سرآشپز ارشد",
        //About Component
        about_us: "درباره ما",
        years_of: "سال‌ها از",
        experience: "تجربه",
        popular: "محبوب",
        read_more: "بیشتر بخوانید",
        //Booking Component
        reservation: "رزرو",
        book_a_table_online: "رزرو آنلاین میز",
        date_and_time: "تاریخ و زمان",
        no_of_people: "تعداد افراد",
        special_request: "درخواست ویژه",
        book_now: "همین حالا رزرو کنید!",
        //Sweat Alert for Booking
        reservation_saved: "رزرو انجام شد",
        your_reservation_has_been_saved_successfully: "رزرو شما با موفقیت ثبت شد",
        date_and_time_is_required: "تاریخ و زمان الزامی است",
        special_request_is_required: "درخواست ویژه الزامی است",
        //Menu Componet
        food_menu: "منوی غذا",
        most_popular_items: "محبوب‌ترین آیتم‌ها",
        search_for_menu_items: "جستجو برای آیتم‌های منو...",
   

        //Food Names

        food_no_1: "برگر مرغ دیلاکس",
        food_no_2: "ساندویچ تخم‌مرغ ویژه",
        food_no_3: "پنکیک بلوبری",
        food_no_4: "نان تست دارچینی",
        food_no_5: "تست آووکادو کلاسیک",
        food_no_6: "کاسه گرانولا و غلات",
        food_no_7: "سالاد میوه تازه",
        food_no_8: "املت پنیر",
        food_no_9: "رپ مرغ گریل شده",
        food_no_10: "ساندویچ کلاب بوقلمون",
        food_no_11: "سالاد سزار",
        food_no_12: "اسپاگتی کربونارا",
        food_no_13: "تاکوی گوشت",
        food_no_14: "پیتزای گیاهی",
        food_no_15: "گوشت دودی باربیکیو",
        food_no_16: "ریزوتوی قارچ",
        food_no_17: "استیک با سیب‌زمینی",
        food_no_18: "ماهی سالمون با لیمو و سبزیجات",
        food_no_19: "چیکن آلفردو",
        food_no_20: "سبزیجات تفت‌داده‌شده",
        food_no_21: "پائلا دریایی",
        food_no_22: "دنده‌ بره کبابی",
        food_no_23: "بیف ولینگتون",
        food_no_24: "میگو اسکمپی",
        //SweatAlert for Menu
        your_rating_has_been_submitted: "! امتیاز شما ثبت شد",
        got_it:"! متوجه شدم",
        menu_item_lorem:"این غذا از مواد تازه و با کیفیت تهیه شده است. طعم منحصر به فرد و لذت بخش آن شما را شگفت‌زده خواهد کرد.",
        //Footer Component
        company: "شرکت", 
        privacy_policy: "سیاست حریم خصوصی", 
        terms_and_condition: "شرایط و ضوابط", 
        contact1: "تماس", 
        opening: "ساعات کار", 
        newsletter: "خبرنامه", 
        sign_up: "ثبت‌نام", 
        home1: "خانه", 
        cookies: "کوکی‌ها", 
        help: "کمک", 
        fqas: "سوالات متداول",
        footer_lorem:"با عضویت در خبرنامه ما، آخرین اخبار و به‌روزرسانی‌های مرتبط با خدمات و محصولات ما را دریافت کنید.",
        footer_address:"خیابان 123، نیویورک، ایالات متحده آمریکا",
        info_example: "برای ارتباط با ما، به آدرس ایمیل info@example.com ایمیل بزنید.",
        number:"۰۹۱۲-۵۶۷-۸۹۱۰"
  

    

        






        
    },
  };

  // Determine direction based on the language
  const direction = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider
      value={{
        language, // Current language
        setLanguage, // Function to switch languages
        translations, // Translation data
        direction, // Direction for text alignment
      }}
    >
      {/* Automatically apply direction */}
      <div dir={direction}>{children}</div>
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
