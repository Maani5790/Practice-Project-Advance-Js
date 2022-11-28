const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      isReady = [true, false][Math.floor(Math.random() * 2)]
      isReady ? resolve('✅ soup is ready 🥣') : reject('❌ No soup today')
    }, 1000)
  })
    

    const getSoup = async () => {
        // null / undefined  
        const data = { rating: 0, tip: 0, pay: 0, review: 0 }
        try {
          const soup = await promise1
          console.log(soup)
          data.rating = 5
          data.tip = .2
          data.pay = 10
          data.review = 5
          return data
        } catch (error) {
          console.log(error)
          data.rating = 1
          data.tip = 0
          data.pay = 0
          data.review = 1
          return data
        }
      }
      getSoup().then(value=> console.log(value));

      const sum = async(a,b) => (a+b);
    console.log(sum(1,2).then(value=> console.log(value)), 'sum')

        










    