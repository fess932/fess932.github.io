(function () {
  window.renderStatistics = function (ctx, names, times) {
  // рисуем табличку статистики
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    ctx.fillRect(110, 20, 270, 420)
    ctx.fillStyle = 'white'
    ctx.fillRect(100, 10, 270, 420)
    ctx.fillStyle = 'black'
    ctx.font = '16px PT Mono'

    ctx.fillText('Ура вы победили!', 120, 40)
    ctx.fillText('Список результатов:', 120, 60)

    var yourColor = 'rgba(255, 0, 0, 1)'

  // выбираем основание гистограмы
  // вычисляем самое высокое значение и с его помощью
  // находим длинну остальных столбиков
  // формула:
  // histogramHeight / maxTime = step, min * step

    var histogramHeight = 150
    var columnWidth = 40
    var indent = 50
    var maxTime = _.max(times)
    var x = 120
    var y = 80

  // ctx.fillRect(120, 80, columnWidth, getColumtHeight(histogramHeight, maxTime, _.round(times[0])))
  // ctx.fillText('Худшее время: ' + max + 'мс у игрока ' + names[maxIndex], 120, 60)
  // точка начала верхнего левого угла гистограмы 120, 80

    var renderHistogram = function (times, x, y, columnWidth, histogramHeight, indent) {
      var drawColumn = function (x, y, columnWidth, columnHeight, color) {
        ctx.fillStyle = color
        ctx.fillRect(x, y, columnWidth, columnHeight)
      }

      var nextX = x
      var color
      for (var i = 0; i < times.length; i++) {
      // выбираем цвет колонки
        if (i === 0) {
          color = yourColor
        } else {
          color = 'rgba(0, 0, 240, ' + _.round(Math.random(), 2) + ')'
        }

      // вычисляем высоту колонки
        var columnHeight = getColumtHeight(histogramHeight, maxTime, times[i])
      // рисуем колонку
        drawColumn(nextX, y, columnWidth, columnHeight, color)
      // добавляем отступ к следующей колонке
        ctx.save()
        ctx.translate(nextX + 5, y + 5)
        ctx.rotate(Math.PI / 2)
        ctx.textAlign = 'left'
        ctx.font = '16px Comic Sans MS'
        ctx.fillStyle = 'black'
        var time = _.round(times[i] / 1000, 2)
        ctx.fillText(time + ' сек', 0, 0)

        ctx.restore()

        nextX += indent
      }
    }

    renderHistogram(times, x, y, columnWidth, histogramHeight, indent)
  }

  var getColumtHeight = function (histogramHeight, maxTime, time) {
    var step = histogramHeight / maxTime
    return time * step
  }
})()
