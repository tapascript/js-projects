মনে করুন আপনি একজন online ভিডিও অ্যাপের মালিক। অ্যাপের নাম মুভি ম্যানিয়া। আপনি আপনার ড্যাশবোর্ডে আপনার অ্যাপের users দের উপরের কিছু তথ্য জানতে চান। ধরে নিন আপনার backend টিম আপনার UI টিমকে এইরকম একটি API response দিয়েছে যেখানে মুভির review এবং rating সম্পর্কে ইনফর্মেশন পাওয়া যায়।

```js
const movieReviewData = [
  [
    {
      "id": '663a0a05bfe65e5778eedf58',
      "title": "The Avengers",
      "content": 'I am an Avenger fan... Big fan',
      "rating": 4,
      "by": "Peter D",
      "on": 1718508747000
      
    },
      {
      "id": '663a0a05bfe65e5778eedf58',
      "title": "The Avengers",
      "content": 'Great movie! Will watch again.',
      "rating": 5,
      "by": "Kiran K",
      "on": 1718076747000
    }
  ],
  [
    {
      "id": '664acd311387e2ad2e8be48b',
      "title": "Interstellar",
      "content": 'What a movie, super scifi',
      "rating": 5,
      "by": "Akram K",
      "on": 1718508775000
    }
  ]
];
```

Response একটি জাভাস্ক্রিপ্ট Array, যার elements গুলো আবার Array। প্রথম Array টি movie `The Avengers`, এবং দ্বিতীয় Array টি movie `Interstellar` এর রিভিউ আর rating এর details দেয়।

এইবারে আপনি আপনার UI টিমকে বললেন এই ফিচার গুলো implement করার জন্য

- টোটাল কত মুভি আছে তার একটা সংখ্যা গণনা করতে হবে।
- সব মুভির গড়(average) rating গণনা করতে হবে।
- টোটাল কতগুলো রিভিউ পেয়েছে সব মুভি মিলিয়ে তার একটা সংখ্যা গণনা করতে হবে।
- প্রত্যেকটি মুভির যেই যেই rating পেয়েছে সেই তথ্য গণনা করতে হবে।
- প্রত্যেকটি মুভির যেই যেই রিভিউ পেয়েছে সেই তথ্য গণনা করতে হবে।
- সামান্য HTML, TailwindCSS, JavaScript দিয়ে একটি ড্যাশবোর্ড বানাতে হবে যেখানে উপরের সব গণনার output দেখাতে হবে।
- যদি নুতুন কোন মুভির রিভিউ বা rating এর details backend API response এ এড হয়, সেই ক্ষেত্রে গণনা বা ড্যাশবোর্ডের কোড change করা চলবে না।