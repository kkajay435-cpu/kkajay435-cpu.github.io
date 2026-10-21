const AVATAR_DATA_URI = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAoKADAAQAAAABAAAAoAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+IB2ElDQ19QUk9GSUxFAAEBAAAByAAAAAAEMAAAbW50clJHQiBYWVogB+AAAQABAAAAAAAAYWNzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZGVzYwAAAPAAAAAkclhZWgAAARQAAAAUZ1hZWgAAASgAAAAUYlhZWgAAATwAAAAUd3RwdAAAAVAAAAAUclRSQwAAAWQAAAAoZ1RSQwAAAWQAAAAoYlRSQwAAAWQAAAAoY3BydAAAAYwAAAA8bWx1YwAAAAAAAAABAAAADGVuVVMAAAAIAAAAHABzAFIARwBCWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPWFlaIAAAAAAAAPbWAAEAAAAA0y1wYXJhAAAAAAAEAAAAAmZmAADypwAADVkAABPQAAAKWwAAAAAAAAAAbWx1YwAAAAAAAAABAAAADGVuVVMAAAAgAAAAHABHAG8AbwBnAGwAZQAgAEkAbgBjAC4AIAAyADAAMQA2/8AAEQgAoACgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwQDAwMEBQQEBAQFBgUFBQUFBggGBgYGBgYICAgICAgICAkJCQkJCQsLCwsLDAwMDAwMDAwMDP/bAEMBAgICAwMDBQMDBQwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/dAAQACv/aAAwDAQACEQMRAD8A/D9R6VaRccdKhT5TVsYZcV0M8cXy8nIqQKR1FPgxyDU5iL/dqGxNkQTI461YijwNx4IpYkKgn86m8pjyOlK5k2QuoDZIwDUW3aMg1e2DaB61HIvkRedP8iMflZiBn6Dr+OKXMjO5n7AxJIpAmTgA4HpUN3qumwMqRyGZgBvKD5cnspPXA61UOvRhH8m2JZsBGdhgepwByaLm0aVSVmomsP0HSnEBvWspdehNvtkt/wB6G+8G+XH+7j+tba6jod0he3ka0ZVG6KXLgt3KOBkj2IyPehyt0IqU6kNXF/mVWX8agdQBnGSK05YFEaywyxzo4zmNt2McEMOqkH1HPaqTL68U076omMr6oqEbh9KhZD/9arpXjjvUXIODVpmiZSC4OSKaz81cYelVmXnPemaIi6mkYEVJtx0pDzQM/9D8RV4ODVpADgjiqiAk1djGOlbtnjllVBGRVlNy8j6VHEj/AHs/hWjGFwC4NZtmMmNhQbSpGSeatxxbwE4B6c05AmMrUGpyyWOmyXqKD0WNjggOfUe3WsnIzb6dxzatFppkNtEkl0i7R5iCRVZuhVW4zjkk5wcY71xdzbahfus13IfnYliTyR3/APrfpU0E3mCFl+Zjw5zklsdfqakmmfzMLyoHT8c/yraMFHV7npYbDRp6pavqUo9MhMaSONockjPpnFTeVAx2oVAHGcVLBp+r3jFLW2mn2I3+rQtheueBTItK1STEUFvKztxwh6g9OlP2ke52+ym9bFbZb7CDjjnH6D9TT5rWEZ4wRy3OeT2/Ou2sPhJ8RL61a/g0i5KqMqGQgtt9AetczqXhnxVpwJ1HTbmLb1UxsOR65GazjiaUnZSRpLC1oq7i7eglhcHTF32u1mZWBVhnKsMHP6Y9DzXR2dxpmt6e8D2gsdSjcmOZZN0c6gZaN0P3XHVSowehrzZbuWN2Mhw3Rh06dB+FaNjdNLIs+/yzGwbdyQSKdSkpe9HRnkYzBqS546S7m4VKnB9aidD1WtGUpP8Avk6SDd9Ce1VSh9Kq5yRl3Ku04qFoyG9auYxwaTZwTVJmqZRIx1FROOc1bZfWoPLYjmqLTP/R/EpFq0incM9KhXrgVbjXOK1Z4smWx82AtXolGzDGoUQIu7v6VdjRX29gaykznciaGM/fUgjpiotdIOif2UcK1zKJUbtujBAUkdMhjjNX0t3iAbtWfq436dIJMeXGwfGM8ngnp9Ky3ZlZSlH1Rw9nFKJktY42MrkJt9STgY96/SP4SfsyeF7ayttS8cxf2jfTKsgttxWKMkZw2PvY718K/C+1h1Dx3pEEvzQrdxu3f7rZwa/anRoBCV2puIGF/wD1V89xRmFaioUqUrX3P1ThPLqNbnq1o3ta1yzoPw/8PeHbZYtI0iztge6xIOPqQSakufCmgwEzQaXYJvbeWWKMMH7nOP5V6Fb6Dqd5abi5AK52+g9yazB4Z1FSrLPmIthgCrcg9M4r4lVKsveuz750qUdOVHml/b2zR77qRIgnC4XH0rxTxlodvO7MwjlZgfmAyCK+m9c0nw+yyC41K3jkBw0LzJvDHsRnIJ+leIeIPDkSB30y5WZVJyikbh6it6UZQak7nPWcJLlTR+cnx08BWVg1rrunWywJIxjuGjGAW/hYj1r53jdYUCjjqrke/fjtX6XeNvCaeLdBvNGZFEpG+Inj515/Wvze1vSZ9I1ebTphhkk247dcYNfoeSYr2lHkk9V+R+YZ/hFTrOcVo/zOnt1zZ24YAZjBAAwRnnB+lI6YBJHFaTw7DsVdoUBQM7sBQB171G6HHHFempHwalrcyWSmYZRV9oWA5qBozziqTNFIpsu6q7K26tEI/QDrUMidjVXNYyP/0vxRjX5gK0I/kwAM1WROc9q0IkBxk1o2eBNluIJKhzwRWzaxo6bG49Kzo4Mkbe/pWtBCQuTnjt71zzl2Oeci2YthVRgj60l5HFNZzWq/KJo2ViMcZGcZ9OOaniO7g9e1Cpsy2M96xuYOVzpP2ZtAh1D4gWMtxEHiWXb83qvP58V+kPiT4vWHgu5ez07SrvWtQjlCvFaxnZFxkB5MYBPoMkV8V/s1WZj+JFvZAcXdw1ygHZPKct+G9SK++fFmg6xp9rC/hi2ha+upQ0lzIf8AUxlvnYY5zz0HJ78V8pnlWnLGxVVXVu9j9n4XU6mXe0oOzb33/pnyZ4z/AGnfjDqOv29jBZ/2FaMxQW0g2Bg3B8yR13NkdgMfjX158KofE+p+DQtlfm4lCiXmTzcOX3MNx+bAHrXg+t/BzxFfa5dahquoSa1b3iOkMKweUISxOyWVxtQsv91Rg46da+iPhV4N1bwLoE9ijsZihYsw2evJAJHfFc+ZYinGnFUbL0PWyzB1XOUq7k35tfofDvx8W4Hii7sdIu3Gr38yNNAgZtzgBRtXtk88V59ZeEfFVncKNa8ZnTdyZaE3BMqtwAuNxwR0r6I+IvgG413xSusQlvtAcrKqsY5CDnow5wfTjNdPcfC228Ry2mt3WnWk2p2dusERLvGqqqhRmAAJnAGeMkjJOa7MNmEYUVGUvwT/ADOHFZS51pSjH8Wvy6nlvhnTfENowEmtDWLZATufBkX/AIHwSOxBr5b+OPh2CDxesluh3TXCZ2js4DcV98aL8OT4JspYVtiyzkklSzKpJzhQxPHavEPih8NtW8WeJtIXQ41DSoyzM5xtMf3Wx3IDHj2p5fmMFiW29Lb7HDnOWVfqdqcby6K/6s+RWjy3I681EYBzmvdfiP8ACC+8CWpvWFwY4JUt52nCDLSD5JIyn8JIKlTypxk814tg52nketfSUMRCrHng9D8ox2Cr4Os6GIVpKz+8zjbueSOKz5otvbFdM6ZQsvaqUsIdQrVvGdtzCEzCAbGQCTUf2cltzVteSiKdvJPSoJoWVRt7Vqpmqkf/0/xeQ4wDWgqAqCOp9KpiI55zVxAUAUEiqlY+cZpWeVbnpXQDBAXH1rDsmPmANyPeuiT94QQNvuK5am5y1ZDggQZPevU/g/4ItfHnje10bUFZ7VIpJ5I1JQzFABHEWXlQ8hUMRyBnFebiMMNx5r6L/ZrurXTviHGt23lrcWrqjd90brLhfUlUPFefjqso4ecob2Z25DClWzLDUq/wuSTv112+ex9l2vwH8HfDjXdO8WaUPs9+A1u0McjvCokjbds3knqMjJPX3r3zQvCcd9HFMZWLdc9fevLviP4taSRBLay/YNOkgls7xMm2milOxgCMjcAwyDzxX0D4Iu4JtMtrmIDEkYII6dK+Cm5VJRnUdz+haVKjhlKlQioreySS18loFv4VSGQTXTbwvK7uQPTjNec2PxP+HmmeLtW8Ia1PcSalaQG5YJazm2RDyFa42eUXAIJXdnmt/wCMvxf8KfCTw22reI7kCaclLWBeZJpAOij0Hcnivy5sfjb8dPiP4rkk8FW32WwaQyPasEFvIhPzea0vylto9s16eGy+VZc6Xurq31ODE5rCjJU3dyfRLU+lNT+IvhbxT43vrW00fUtLsbdPMtNTlTbZXTocNGhJ3Ennbx9K988NwWF5HDeouQy55HzD6n1r8yPibD8X38VQ67p94kTlfltILiLyoHBwI9gIXOOuK9B+FH7TXiaw8Q2fgrxxZBZJphbtOgKurE4UsvcZwD7V11cqbpqpRs7LVX1RxUc5UKjp4hOLb0bWjP0A8TeVPbzRsgyowDjGf/1V8fa3rQ0Pxjpiw7XkWWZ9jk7SqRlipx0Jx8vvX0T4u8W21rB5IZTLKuVxwASPWvijxBq1pH4+sLjWZHhjSU+Y65LIrDaWwOwznPpXFhKPPJu3RlY/GRhZykrXXpue4fGy7sfEnw3vZA4xc28l0C33kkt9rEfiQMfWvzi8oqm1hgZ4r7H+Lt94bTww+m+HNUivZrtkHlQZIjhyJJGPuxVc5Oa+VDb7sH7y+le/lCcKTv1Z+W8eZhRrZhCNJp8sUnZ31u3bTyZhQ2j/ADM/Tt71G9r2Pc8cc4rr2gVrfCDoc56ViSwyIT8pBAJFetGpc+Op1bnPSwKrsxwCOg9qov6AEg/55rSuDI7DzOO5HsOBWfLKpfYAPb/9ddC1O2DP/9T8cPLI5FSIpPJpVJLDaKt4U8Y20mz5psktQA4OOlbfmBWGD17VjxZjyRk1p2pQkNjJPasJnNUNy2bO3I46811ui39xp1/b6hYytDcWzrKjqcEMpyMGuTto2Mm5+AB/Ouot4k2Ky43dxniuOpZ6Hl1qji1KLs0fbnjf9oj4fat8O/7E0TR7tNTuIkBSQgQ28qMrsysD82WHBx35r2v4S/E4ap4dspoZUVBEnyryBx7c1+YEgbblMYPUH1r1L4P+MT4V1GfQ7mMzReYs0ChiN0ZBDAHuUYjI/u14WJyymqL9nvufpvDPGWJxuL9ljGr20srbb382fV/7Svw08Q/HGTwuPD7BfstzcQzszYSOJtr+YffK4Hc5rEsPgdpHw00qbU/GPiGc6daRkBYHezRFA6Mked5z3Lc17XpvxC8OWum6est2iPOqvHj1JwRjGfaumv8Axn4D1O2bTdQuIZ4blGjlaXmNQTtw3b6GvIo4vEKEaNvdV/zP0n2VCFSVe/vM+KYbb4L+OtVXQ9EtbmaabEomYzSSP/eYEsdvueK6LXPgh4HsRZ6rYRSW17prpNHJ5jysSjBvnLkkjtX1Nonwk8G+F5ZbzwdZWljqDWL3ALszGSIkAIM9CSRz0Ar478U/tGaHCtxBcQLBcfvbdoyOVlQlenswI5rtcq9Sf+z3sjDEulCHNjErvyJvG2sXulN516zSRvnyzkFSGOcc54r5tu9RvPEms3V6iq8Fqm8tgjAkIjAwfQ5/Kr3jf4pW+t6NZfbTGQw5RMqUGMYwB3xnHr061o+E/Dd7beAtT1+/Hkz6pPb+VCcgrDG3yA9eTuLH9a9HDU/YU1KotW7HwvFdZ1cHX9k9FG7OWiikeT5RtJ4Of51SutPd5SyDIBAIXiunFlLbgM7Esozwex+tQgBg4ZcOTkk9OO9d3OfidOvreJzc1k0MA8vJYYJwTzmsO4CTDLAZHp14+ldncRmBTnBRskM3WuHuEVJjubIySGBx1rWm7np4aV9Tm75F8w4BAx1rmm3hi+c4Pf2rqbtwQQr5HoQM1zNwUKHZw3Uj0r0KZ7VFn//V/HaI7nGecVpBFA3HpWRESqgAYJrWXc6BP6VnLc+YmSxRnflDx6VvWVqJCvGDnk9qzbSD5wtdzpGl3V+6W1hG0sz9FA5wOSfQAdyeBXNVnZHDiKnKrtjUtwilwN56AVcgiYNhicnpWv8AZND0iN7zxHrVnbRxkjyLZ1u7pyOoWONtvGRyXA9zXP6t8S/D+kW7QeGdHE1ydxjvdSfzXAXqRCu2LGOzKxB4ya5kpy0ijzFCrW92jBy89l97/S52lpoV9eWc2oxxmKytVLXF3MfLgiAGSzyNxx7ZPtnFQ+HdU8E+JfElp4J0W6uZ9Tuo5Hg1cIIooJ4l8wCKJhvkDBSH37QVONueR4F4k+InjHxdCNO1zUpZ7RMMtsoCQq2MjbGgCgL2AGKg+Ft5LpnxI8O3yHb5d8gbH91gVb9Ca0qYKSozlJ62drHv8P5NKnjKNXFS2krJbb9Xa7/D5n1Dql3498NQzeGtXtVuvmbybqEFl57qB8ygnnBqH4T6T8QPGfxI0nw3LLJc6ZeTNJfwncHEEQ3sX44GQB+PFfW3ibw9C9ul5GvmEgMR7HnivfPgJ4O0/wANW83jY226TUoWiiypLLGjHoOvzNzwOgFfIwzRezaUFd9fPufuMsqftYtydo6/LscxqvxN03Qvjnonw+uyY5r7S5LeGIgkFiEMa9OhUNz7V+fX7V/wN1zwh8SpdcsLdxpev/6XBt4jimwPOTJ6HPzY969l+OPgf45al8bZPjP4d8LX0ml+HZoGtZMKJZoouZDHAT5jA5YcLX3R4l03Q/2g/hZp5EbRi5jWaOcoUkhnQYPDAHhvlYHGRkVrRrPCOFaEr3Wv9fcXjKbx8Z0Kkbcr0e3T/O5+Mfg/wWZL2C7vh50ikYQ8qD64r3/4lazqHg/4drf6VBFdSxXEO6CWPzEeMt842ggg4HVSCO1bDeGDoOpy2E8RiuLeQxSKRghkOD/iDS+N/Kk0mwsZAGMtymQfQVpPGurXhJ6pO551TKKcsFWw81pNWfzPHtB8deBPGVpCTOdB1i4+Q21yWezLHp5Vz1jB6YlGFP8AGa377RdT0ubyNWt3twgxiROGB6Mr9GHuCRXyd4ks4tM8U6lZW4CxLcyKgHQAnOBz6mu88PfF/wAd+HYYdFhvmvNKgIiGn3qrPb7TzhQ4yq5z90jHYivo54NuKnSe+tmfg2Y8Mzo1JLCSvZvR/o/87+p6Tqe6dHgwQI+hPTHsBXn1zG6OwzhTgL7c13Vh8RPBGt+RaeJNPk0VyriS701mmQuDwWt5Two4GFcHFc5e2em6rIz6FqMV4RjZEytbzNnsEkAyfYEk9s1NNSi7SjY58NCrS92rBx/L71ocPeEI5PQg8ntWKwDsXHftW5qMcqApKjIy9QwIYfUGsDJU7a9CGx7dLa5//9b8e4+cDGc963dL0y+1W5S1sonnmcgJHGpZiemABRoenWNx5t5qk8kFpbrk+WhkkkftGoHAz3Y9B2NdRJ4yFjDLYaE39k2sw2iW3A3yxtjKyTY83IOCwyB6DFc1STvaKPk6ntJPlpL5vY6WPwVb+HIXuvHF7/ZcsY+SxRPOunzjAKqdsec/xHPtXLeIfErXKS6do1v/AGfZKCCiOS8xAyTI7AOf93AX2rNlR8MZiGaYbnIJOdvEnPr0cVQuI3U75GDsGDHAzkrw3/fSkEVlCGt5O48Pgkpc9aXM/uS9F/m2c3dIEdWCjahQM2PvZbKt26g4471i3G5lkJODtl4JxwXHTIrrry2VrfywfmZWQ84+aMkr/LiuUnbacDOG3nv0Yq3OPbjk12QZ6kWZmAt1t6jcwP6LXpnwd8HXnjb4maF4fsb600x5bnzDdXz+XBGkILuSRnkgEKB1OOa82vYwHWQkfMznA/38e9e+/szeKL/wp8VLXxLa6RZ6v9gtLiac6hj7PaR+WQblmZWwV4C8ZJOF5qMXNxoTkux6eWU1UxdKMtm1+fz/ACP2W8KeEdF07TWtiZPFc1thFmSIxWqFR97LcN7ZJr2OyHiWLSTHDcaXoq7QFQBZCq9uPlFfHXhzU/2oPjP4YvPEeli18PaNcMTbfat6PMmcBljRS4XHQvtyMYFcTd/Bb9qO7mj0+fV9FQ4JZ5budMgdyApI/OvzqWHSldaL7v6+8/ZXKm4/Ff5X/wAvyPtiS71ixZVm16LV7ksP3eyNUCnqAqZI9smtlLy2BMCKNOuHb5toBgcnrkdAT68V8N2XwB+JHh+K41rXvG1lFefL5MVi07jI4IZ5WXj6LXr/AIXk+LWgXcNhrdta63p06g/a4LlN6j/aR9rfpXNUhyv4i+VTinH/ACKnxx+H013MPF+hWUj3IULfxRqXJVRhZkx1x3wM4+lfDfjHUUt4HvJTgWYLsW42lexz3r9ebdIUto5ZGaIKudquDsJ7Y5H4V+WX7ZXh2+vLbUvEujxpDFFKq6nFEu0yIhAWcY+o3+3PY11Ze1OvCnJ2uzz8xcqeGqVIq7SPzovrt7vVrm9lJeSaRpnOem4k8/8A1xRGygGTI3kbieBgq2fXHQ+lZ8KhmWP7obJJHXH5ZH4cGp3kZIgFz8wXA553KB2P8xX6ZypJI/GZycpNvdmgA8nmRZJU+awJBPp3wRXRRKPtAeQkHzFUAeoTrj16ViWEAkGSMbgecDozgHsOwNdDBu2714bBZRj+ObhePZeawmYSO7g8SwapbQw+MoPth8tY0uo/lu4xzjLdJAqjgPn8Kzb3whYzwC+8Patb3sbEYhuCtpcqH+7lJGw3oSjHmuaOwMI2kIRUZc9QFUYkc/8AoK1IB9ulWFUYAhTIFz8ijlYwe5Ixn61goWd4u35HnvBRTvTfL5dPu6fI/9f8sridBF9mtohb26ZwuSeF6ksQCTnkkZ+nQHDuoY7vfnIDYUkAkk9QoB6t6D+HOWI6VP5wlfEB2EYznAP94MQACAo+c7lIyVHaoGdAP3WUAQZ5y6xt0x6vKeTxkDoSBXOlbY8OEeXRC2ErTIIZgBPasY2wcqWUfIc+pXKnnJxVuILtMRVTj5RkDDAgtGScqPmXK9KxbyQ2xS/TAmsmQuq45Xg+XGuDkquSzYPetJpFuLNL1TlgpUEBQfkJdN24NyDwDgcHpRKPUprQZOGQblcsMrKuMtwuM8ANyVIP1rj9SgAdwR0LjB7AZHcDtjtXQ3V2k6kPgN8yxgsDw8ZIwWTBAOe/FYd1IJd2zBy+XXK8lo1PG0+o9K0p6alxK+n6dqOuXkOkaRbvdXly6RW0CDLM7spwMDHPX2HOa/Xz4Dfs5aH4G8KxQa3Cl1ql+IrjUXblGZclE56onRR0Jy3U15T+yL8BJdNt4/iP4ktc391EosUmU5toWXBbBP35B69Bx1Jr9BzYQCBkmk8mBR875wzY96+Kz7NJ4ip9VoP3Vu+7/wAkfp3DWURwtP63iF78tl2X+bPlf4wz/G3TfEE0nwp1SGx0uSGJbmJ2AQPGAu9Mg7BtABxgcZrw5o/2p9RuzJL4j0stCOczgkq3oQuRmvTfjt8atL8F2N5pXh9IbiZ1I3zM2R6gEdCfcYr8xl+JPiu91AvZ6hPbFSfLVDuGwnJQgkZUdhnjtV5fhK1Sl8KsurVzux+Y06VSzlK76Jn29qOh/tLwxyzX93pmoWyL5vleerl8cgKrL1rjvCX7UXjbSfEUWia9GY5IJRG8MuIhHjg7sjgAeleb+H/2jPFHh0W+n6jdC7iRhzJFhlz1OTnivaPEen/DX44aLHrGnTRaf4js490N3AVBeUciOZT95SfxGaudD2emJprlfVLYUK7q/wC7VHzLdN7n3Ba/GeHUNEH2K2e4a6h4CAgMcc7cgHHocVyWr6Tb65o5e/gfbcJtminG47WBBBHfg4PtXzR8AvH2s+GL1dG8ZuPMR2jmjlhRRGQSF2PjLBuCGzyOlfeBl0jV7VbyxZCGU5XjBrwsXhXSk+XoevQxanG0lufiN8XfhrcfDfxdNa20THS7t99hKSSvlk5aLJzzHnHPbBryPHn3KjrsVR24PHsDX7I/F74X6R4/8MzabOjCQHzYHXloZVHysMdgeo7jIr8ida0HUvC2tXehavH5V5aytHKgPH8JVlJbkMCCOOlfb5Hmn1qlyTfvx38/M/NeJMneDre0pr93Lbyfb/Int/ki2qcYB7eufp/e9RW204QmRZQceYw5XGVxEnG/16Vi2xVChYgYK7TkdNw9iQOPQD2rRtrh2CeYxCfJnHmHHLSH+H/Pv0r1JHyzRYACEui70XjjnKwj1GfvSHHUUzVr99ItmiSTNwQFJHOZZBuY9+VBwBVq3KQqLu7wEUKFDdc/61yNwU8ZHQ9a5eySTW9Sn1W5Be3hdmCgndycZQ8ElcDjmiMer6C31Z//0PyHZZpl8qFg78dCOQfnlJOSFxwuQRmnxapDsPmn9/zLgj77HiMH2A55A9cmsGWW6iLSRbi0W8sCucqGGRllz+R/KoZ7+z1iY3DsLa7Vtytu2Rk44XBLEYPcceoqFDqzyeU3JUkhZo5CC7DyYyRkMzjdISPx45z6ZFYthcNbSy2OGKRvIUIRRmPaeucN2x1qOLUQ6NaXwSN4VYxsD8pJ44IyuPpxWXdkx3MUmwKZBs4AYY2jBGeOc1cY/ZZXK9joHaaSf7Nb72lBXYMSZICkdtw6f59PuH9lT9nS38XXFv4++JEZt9FgaOWxt5cg3TquN8gYA+WpHA/iPsOflXwXqWleG9Z03XtXtEuYopke6gkAUPbIwJQ7Tj5gOeeRx3wf1r8W/F/wReeEba/0a4QW9zAs0MMI2qgxwuABgj07V85nuNrUoRpUY/F1/Q+q4Uy/D16kqteXwbL9fQ9R8X+LdL8Pwx2uj7Vt7cDIXCqAO9fGnxL/AGlyIp7Cxnw+SuFIrwbxv8cftJmtDPKsYBXcgJPPZq+XdZ122v7kixy7Scln+9n6mvNy7KG3zVEfTZjm8IRtTaLfxA8ZX3ia8eSaVpCxyc4/pXmkTNATKhw688da0XhmyXm+QHPueDgjOMZqu0a7tmQwAbHf69Ca+xoUYwjypaHwmKxrnNzvdlOa6ZnMsxYtxnkfhW/oniHUdDvobzS7p7ZwQTtORkeo71gyw5dlwcfLjr/hVZmUFsKclsj9OtbypQkrNGFLG1KcuZPU+ib7436/4l1HSk1KK3t/7PjaETwJh5txDAyewPQDpk19MeDvjpLplvHbSz7gMc7sqR/SvzotJy3UdwB0B5/Ku20nVLVQFvSwB4EgPIx6+teNi8sptWUdj6LBZ1UlJuUrt9z9afBPxHj8S6jEu8GIn5j2wa5f9or4A6D470r/AISnweY1120Q5jUgfa1HPlsemR/CT9DXxV4S+Idl4fdI7W+wGGSzDn6Ada+x/hB47tdSvBJeXwcv1SQ/Lg18rXoVsHU9vR0sfWUqtDH0nhq+tz8z7q3vLG6ksbuN7eW1fy54XDqyurMCMKBgg+9JEdzRwr8w2kD5ZOnlhcfMw9f89/tv9q/Ufh++r20Om2kI1S4G3UPJJOQANkpHTfgnJHJH3s18Q29mLS4mBUF4OUIQNuB24IGS2Mc9q+zwOK+sUI1XGzfQ/LszwawuJnh1Lm5eq/rfuSeIb4w24srY8yl1GCpGcgHC8np/9arOm/6GkUEQxDGwKsSAWWQYOSOMZ4PX3xXI5N/rSRP91ckbkCkZPYfj3rfur3ZENOtF3XOPLG05LEHufUex49RXZKOiicXLpY//2Q==";
const AVATAR_INITIAL_SRC = (typeof window !== 'undefined' && window.location && window.location.protocol === 'file:') ? AVATAR_DATA_URI : '/assets/profile-avatar.jpg';

/* ════════════════════════════════════════════════════════════════════════
   site.js — shared chrome as Web Components: <site-nav> and <site-footer>.
   Light-DOM custom elements, so global CSS (css/site.css) + color tokens +
   the hand-written scroll behavior all work unchanged.

   USAGE on any page (head): link css/site.css before your page styles.
   In the body, first the pre-paint theme guard, then the elements, then this script:
     <script>if(localStorage.getItem('theme')==='night')document.body.classList.add('night');</script>
     <site-nav></site-nav>
       … page content …
     <site-footer></site-footer>
     <script src="js/site.js" defer></script>
   Keep that 1-line inline theme guard inline per page (must run before first paint).
   ════════════════════════════════════════════════════════════════════════ */

const NAV_HTML = `
  <nav id="nav">
    <div class="nav-side">
      <a href="/#work" class="nav-back" aria-label="Back to work">
        <svg class="nav-back-arrow" width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
          <path d="M7 1 L1 7 L7 13 M1 7 H17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Back</span>
      </a>
      <svg class="pin" width="14" height="20" viewBox="0 0 14 20" fill="currentColor" aria-hidden="true">
        <path d="M7 14.475C8.65 13.1417 9.896 11.8583 10.738 10.625C11.5793 9.39167 12 8.23333 12 7.15C12 6.21667 11.8293 5.42067 11.488 4.762C11.146 4.104 10.725 3.57067 10.225 3.162C9.725 2.754 9.18333 2.45833 8.6 2.275C8.01667 2.09167 7.48333 2 7 2C6.51667 2 5.98333 2.09167 5.4 2.275C4.81667 2.45833 4.275 2.754 3.775 3.162C3.275 3.57067 2.85433 4.104 2.513 4.762C2.171 5.42067 2 6.21667 2 7.15C2 8.23333 2.42067 9.39167 3.262 10.625C4.104 11.8583 5.35 13.1417 7 14.475ZM7 17C4.65 15.2667 2.89567 13.5833 1.737 11.95C0.579 10.3167 0 8.71667 0 7.15C0 5.96667 0.212667 4.929 0.638 4.037C1.06267 3.14567 1.60833 2.4 2.275 1.8C2.94167 1.2 3.69167 0.75 4.525 0.45C5.35833 0.15 6.18333 0 7 0C7.81667 0 8.64167 0.15 9.475 0.45C10.3083 0.75 11.0583 1.2 11.725 1.8C12.3917 2.4 12.9377 3.14567 13.363 4.037C13.7877 4.929 14 5.96667 14 7.15C14 8.71667 13.4207 10.3167 12.262 11.95C11.104 13.5833 9.35 15.2667 7 17ZM7 9C7.55 9 8.021 8.804 8.413 8.412C8.80433 8.02067 9 7.55 9 7C9 6.45 8.80433 5.979 8.413 5.587C8.021 5.19567 7.55 5 7 5C6.45 5 5.97933 5.19567 5.588 5.587C5.196 5.979 5 6.45 5 7C5 7.55 5.196 8.02067 5.588 8.412C5.97933 8.804 6.45 9 7 9ZM0 20V18H14V20H0Z"/>
      </svg>
      <span class="nav-loc">KOZHIKODE,&nbsp;KERALA</span>
    </div>

    <div class="nav-pill" id="nav-pill">
      <div class="nav-id">
        <a class="nav-avatar" href="/#work" aria-label="Ajay K K — home">
          <img src="${AVATAR_INITIAL_SRC}" srcset="/assets/profile-avatar.jpg 1x, /assets/imgProfilePicture.jpg 2x" alt="Ajay K K" onerror="this.onerror=null;this.src='${AVATAR_DATA_URI}';">
        </a>
      </div>
      <div class="avail-tag" aria-hidden="true">
        <span class="avail-text">Available for work</span>
      </div>
      <span class="avail-dot" aria-hidden="true"></span>
      <div class="nav-links" id="nav-links-group">
        <a href="/#work" class="nav-link">Work</a>
        <a href="/about" class="nav-link">About</a>
        <a href="/playground" class="nav-link">Playground</a>
        <a href="https://wa.me/918848168060" target="_blank" rel="noopener noreferrer" class="nav-cta nav-cta-whatsapp" aria-label="Chat on WhatsApp (+91 8848168060)">
          <svg class="nav-cta-wa-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" fill="#25D366"/>
            <path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39s1.02 2.77 1.17 2.96c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" fill="#ffffff"/>
          </svg>
          <span>WhatsApp</span>
        </a>
        <button class="nav-burger" id="nav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu-overlay">
          <span></span><span></span>
        </button>
      </div>
    </div>

    <div class="nav-side right">
      <button class="nav-wave" id="nav-wave" type="button" aria-label="Play music" aria-pressed="false">
        <svg class="nav-wave-svg" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <defs><clipPath id="navWaveClip"><circle cx="20" cy="20" r="14.5"/></clipPath></defs>
          <rect class="nav-wave-bg" width="40" height="40" rx="20"/>
          <g clip-path="url(#navWaveClip)">
            <g class="nav-wave-travel">
              <path class="nav-wave-path" d="M-20 20 C -17.5 11.1 -12.5 11.1 -10 20 C -7.5 28.9 -2.5 28.9 0 20 C 2.5 11.1 7.5 11.1 10 20 C 12.5 28.9 17.5 28.9 20 20 C 22.5 11.1 27.5 11.1 30 20 C 32.5 28.9 37.5 28.9 40 20 C 42.5 11.1 47.5 11.1 50 20 C 52.5 28.9 57.5 28.9 60 20"/>
            </g>
          </g>
        </svg>
      </button>
      <button class="day-toggle" id="theme-toggle" aria-label="Toggle day / night theme" aria-pressed="false">
        <svg class="toggle-ico ico-sun" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" fill="currentColor"/>
          <g fill="currentColor">
            <circle cx="12" cy="3.6" r="1.15"/><circle cx="12" cy="20.4" r="1.15"/>
            <circle cx="3.6" cy="12" r="1.15"/><circle cx="20.4" cy="12" r="1.15"/>
            <circle cx="6.1" cy="6.1" r="1.15"/><circle cx="17.9" cy="6.1" r="1.15"/>
            <circle cx="6.1" cy="17.9" r="1.15"/><circle cx="17.9" cy="17.9" r="1.15"/>
          </g>
        </svg>
        <svg class="toggle-ico ico-moon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 14.2A8 8 0 1 1 10.3 4.2a6.4 6.4 0 0 0 9.7 10z" fill="currentColor"/>
        </svg>
      </button>
    </div>
`;

const MENU_HTML = `
  <div class="menu-overlay" id="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
    <button class="menu-close" id="menu-close" aria-label="Close menu"></button>
    <nav>
      <ul class="menu-links">
        <li><a href="/#work" class="menu-link"><span class="num">01</span><span class="word">Work</span></a></li>
        <li><a href="/about" class="menu-link"><span class="num">02</span><span class="word">About</span></a></li>
        <li><a href="/playground" class="menu-link"><span class="num">03</span><span class="word">Playground</span></a></li>
        <li><a href="https://wa.me/918848168060" target="_blank" rel="noopener noreferrer" class="menu-link"><span class="num">04</span><span class="word">WhatsApp</span></a></li>
      </ul>
    </nav>
    <p class="menu-footer">KOZHIKODE, KERALA</p>
  </div>
`;

const FOOTER_HTML = `
  <footer class="footer" id="contact">
    <!-- crest is a masked block (see .ft-wavy in site.css) — NOT an inline stretched
         SVG, which iOS Safari flattens to a straight line during the pinned scroll -->
    <div class="ft-wavy" aria-hidden="true"></div>
    <!-- the land bleeds wider than the footer; clip it in its OWN wrapper so the footer
         itself can keep overflow:visible (needed so the crest poke isn't cut on iOS) -->
    <div class="ft-land-clip" aria-hidden="true"><img class="ft-land" src="/assets/footer-land.png" alt=""></div>
    <div class="ft-garden" aria-hidden="true"></div>

    <div class="ft-inner">
      <p class="ft-sub reveal">From brand strategy and packaging to illustration and advertising, I help ambitious businesses build visual identities that captivate, inspire, and drive real growth.</p>
      <h2 class="ft-head"><button class="ft-head-btn" type="button" data-contact-open>Let’s design your next brand</button></h2>
    </div>

    <p class="ft-credit">Designed by Ajay K K · Kozhikode, Kerala @2026</p>
    <nav class="ft-social" aria-label="Social links">
      <a href="https://www.behance.net/ajayk14" target="_blank" rel="noopener">Behance</a>
      <a href="https://wa.me/918848168060" target="_blank" rel="noopener">WhatsApp (+91 8848168060)</a>
      <a href="mailto:kkajay4352@gmail.com">Email</a>
    </nav>
  </footer>
`;

const CONTACT_EMAIL = 'kkajay4352@gmail.com';

/* contact drawer — opened by [data-contact-open] (nav CTA + footer headline).
   Daisy petals are generated in JS so the SVG stays readable. */
function daisySVG() {
  let petals = '';
  for (let i = 0; i < 12; i++) {
    petals += `<g transform="translate(48 36) rotate(${i * 30})"><ellipse cx="0" cy="-19" rx="7.5" ry="15.5" fill="#faf5e6" stroke="#e2d5b0" stroke-width="1"/></g>`;
  }
  const dots = `<circle cx="45" cy="33" r="1.4" fill="#f6c740"/><circle cx="51" cy="38" r="1.3" fill="#b9791a"/>
    <circle cx="50" cy="32" r="1.2" fill="#b9791a"/><circle cx="44" cy="39" r="1.4" fill="#f6c740"/><circle cx="48" cy="36" r="1.3" fill="#b9791a"/>`;
  return `<svg class="cd-daisy" viewBox="0 0 96 152" width="76" height="152" aria-hidden="true">
    <g filter="url(#ft-paint)">
      <path d="M48 150 C 54 112 42 78 48 46" stroke="#b06a4d" stroke-width="4.2" fill="none" stroke-linecap="round"/>
      <path d="M48 148 Q 30 132 24 106" stroke="#33361a" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      <path d="M48 148 Q 66 134 71 110" stroke="#3c4020" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      ${petals}
      <circle cx="48" cy="36" r="9.5" fill="#e89a1c"/>
      ${dots}
    </g>
  </svg>`;
}

const CONTACT_HTML = `
  <div class="contact-scrim" id="contact-scrim"></div>
  <aside class="contact-drawer" id="contact-drawer" role="dialog" aria-modal="true" aria-labelledby="cd-title">
    <button class="cd-close" id="cd-close" aria-label="Close contact panel"></button>

    <div class="cd-body">
      <p class="cd-eyebrow"><span class="cd-dot" aria-hidden="true"></span>AVAILABLE FOR NEW PROJECTS</p>
      <h2 class="cd-title" id="cd-title">Grow together?</h2>
      <p class="cd-intro">Tell me what you're growing — a product, a brand, a wild idea. I'll write back within 48 hours.</p>

      <form class="cd-form" id="cd-form">
        <input type="text" name="_honey" class="cd-honey" tabindex="-1" autocomplete="off" aria-hidden="true">
        <!-- the three inputs are one block, not three loose rows — the wrapper owns
             the in-group rhythm so it can stay tighter than the gaps around it -->
        <div class="cd-fields">
          <div class="cd-field">
            <label class="cd-label" for="cd-name">YOUR NAME</label>
            <input class="cd-input" id="cd-name" name="name" type="text" required placeholder="Jane Appleseed" autocomplete="name">
          </div>
          <div class="cd-field">
            <label class="cd-label" for="cd-email">EMAIL</label>
            <input class="cd-input" id="cd-email" name="email" type="email" required placeholder="you@company.com" autocomplete="email">
          </div>
          <div class="cd-field">
            <label class="cd-label" for="cd-msg">WHAT ARE WE MAKING?</label>
            <textarea class="cd-input cd-textarea" id="cd-msg" name="message" rows="3" required placeholder="A few lines about your project, timeline, or budget"></textarea>
          </div>
        </div>
        <button class="cd-send" type="submit">
          <span class="cd-send-label">Send it over</span>
          <img src="/assets/imgEmail.svg" alt="" width="20" height="20">
        </button>
        <p class="cd-error" hidden>Hmm, that didn't send. Email me directly at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
      </form>

      <div class="cd-done" hidden>
        ${daisySVG()}
        <h3 class="cd-done-title">Planted!</h3>
        <p class="cd-done-copy">Your note is on its way. I'll write back within 48 hours.</p>
      </div>
    </div>

    <div class="cd-alt">
      <svg class="cd-wavy" viewBox="0 0 1440 198" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.15182L46.4 23.4471C91.2 42.7424 175.3 94.0468 266.5 74.7515C359.3 55.4562 446.5 33.4304 548.8 33.4304C651.1 33.4304 731.2 68.4695 822.4 94.1965C913.6 119.924 1006.4 65.6287 1097.6 65.6287C1188.8 65.6287 1280 119.924 1371.2 87.7648C1462.4 55.6059 1553.6 29.8789 1646.4 10.5836C1739.2 -8.71166 1828.8 -1.41153 1873.6 30.7473L1920 57.5792V197.105H1873.6C1828.8 197.105 1737.6 197.105 1646.4 197.105C1553.6 197.105 1462.4 197.105 1371.2 197.105C1280 197.105 1188.8 197.105 1097.6 197.105C1006.4 197.105 913.6 197.105 822.4 197.105C731.2 197.105 640 197.105 548.8 197.105C457.6 197.105 366.4 197.105 273.6 197.105C182.4 197.105 91.2 197.105 46.4 197.105H0V4.15182Z"/>
      </svg>
      <p class="cd-alt-label">NOT A FAN OF FORMS?</p>
      <a class="cd-alt-mail" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
      <nav class="cd-alt-social" aria-label="Social links">
        <a href="https://www.behance.net/ajayk14" target="_blank" rel="noopener">Behance&nbsp;↗</a>
        <a href="tel:+917356511350">+91 7356511350&nbsp;↗</a>
        <a href="tel:+918848168060">+91 8848168060&nbsp;↗</a>
      </nav>
    </div>
  </aside>
`;

function initContact() {
  const drawer   = document.getElementById('contact-drawer');
  const scrim    = document.getElementById('contact-scrim');
  const closeBtn = document.getElementById('cd-close');
  if (!drawer || drawer.dataset.wired) return;
  drawer.dataset.wired = '1';
  let opener = null;

  function setOpen(open) {
    drawer.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      closeBtn.focus();
    } else if (opener) {
      opener.focus();
      opener = null;
    }
  }

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-contact-open]');
    if (!t) return;
    e.preventDefault();
    opener = t;
    setOpen(true);
  });
  scrim.addEventListener('click', () => setOpen(false));
  closeBtn.addEventListener('click', () => setOpen(false));

  document.addEventListener('keydown', e => {
    if (!drawer.classList.contains('open')) return;
    if (e.key === 'Escape') { setOpen(false); return; }
    if (e.key !== 'Tab') return;
    // keep focus inside the dialog while it's open
    const items = Array.from(drawer.querySelectorAll(
      'a[href], button:not([disabled]), input:not(.cd-honey), textarea'
    )).filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // form → email (FormSubmit AJAX endpoint, no backend needed)
  const form    = document.getElementById('cd-form');
  const errEl   = form.querySelector('.cd-error');
  const sendBtn = form.querySelector('.cd-send');
  const sendLbl = sendBtn.querySelector('.cd-send-label');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    errEl.hidden = true;
    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return;               // bot filled the honeypot
    sendBtn.disabled = true;
    sendLbl.textContent = 'Sending…';
    try {
      const res = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: 'Portfolio inquiry — ' + data.name,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false'
        })
      });
      if (!res.ok) throw new Error('send failed');
      form.hidden = true;
      const done = drawer.querySelector('.cd-done');
      done.hidden = false;
      done.classList.add('show');
      done.querySelector('.cd-done-title').focus?.();
    } catch (err) {
      errEl.hidden = false;
    } finally {
      sendBtn.disabled = false;
      sendLbl.textContent = 'Send it over';
    }
  });
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    function applyTheme(night) {
      document.body.classList.toggle('night', night);
      themeToggle.setAttribute('aria-pressed', String(night));
    }
    // sync knob with the class set by the pre-paint script
    applyTheme(document.body.classList.contains('night'));
    themeToggle.addEventListener('click', () => {
      const night = !document.body.classList.contains('night');
      const switchTheme = () => {
        applyTheme(night);
        localStorage.setItem('theme', night ? 'night' : 'day');
        window.updateNavContrast?.();   // theme swap changes the backdrop under the bar
      };
      // dissolve between themes: View Transitions crossfades the whole page
      // (gradients + images included); fallback fades the token-driven colors
      if (document.startViewTransition) {
        document.startViewTransition(switchTheme);
      } else {
        document.body.classList.add('theme-fading');
        switchTheme();
        setTimeout(() => document.body.classList.remove('theme-fading'), 500);
      }
    });
}

/* Nav music toggle — global control over the recorder's <audio id="audio">.
   The wave animates while the track plays; clicking pauses it (wave flattens
   to a line). Stays in sync when the recorder itself is played/paused. */
function initNavMusic() {
  const btn = document.getElementById('nav-wave');
  if (!btn) return;
  const audio = document.getElementById('audio');
  if (!audio) { btn.hidden = true; return; }   // no track on this page

  function sync() {
    const playing = !audio.paused && !audio.ended;
    btn.classList.toggle('playing', playing);
    btn.setAttribute('aria-pressed', String(playing));
    btn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
  }

  btn.addEventListener('click', () => {
    if (audio.paused) audio.play().catch(() => {}); else audio.pause();
  });
  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  audio.addEventListener('ended', sync);
  sync();
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const navPill = document.getElementById('nav-pill');
  const heroEl  = document.querySelector('.hero');
  let lastY = 0;
  // hero height only changes on resize; reading it per scroll event forced a layout
  let heroH = 0;
  window.addEventListener('resize', () => { heroH = 0; }, { passive: true });
  // was an unthrottled scroll listener — it ran more often than once a frame
  Scroll.add(() => {
    const y = Scroll.y();
    if (heroEl && !heroH) heroH = heroEl.offsetHeight;
    const threshold = heroEl ? heroH - 320 : 40;
    nav.classList.toggle('scrolled', y > threshold);
    if (navPill) {
      if (y > 50 && y > lastY) navPill.classList.add('compact');
      else if (y < lastY)      navPill.classList.remove('compact');
    }
    lastY = y;
  });
}

/* Nav contrast — the nav text/pin/toggle-label colour follows the LUMINANCE of
   whatever is actually painted behind the bar (not body.night). This keeps the
   chrome readable over any section: a dark case-study panel gets light nav text
   even in day mode, a cream section gets dark nav text even in night mode.
   The backdrop is sampled with elementsFromPoint at a few spots across the bar;
   a section can force the result with data-nav="dark" | "light". Sets
   #nav.nav-on-dark (light text) / #nav.nav-on-light (dark text). */
function initNavContrast() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const parseColor = str => {
    const m = str && str.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(',').map(parseFloat);
    return { r: p[0], g: p[1], b: p[2], a: p[3] === undefined ? 1 : p[3] };
  };
  const relLum = ({ r, g, b }) => {
    const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  // gradients don't expose a single background-color — average their colour stops
  const gradientLum = bg => {
    const cols = bg.match(/rgba?\([^)]+\)/g);
    if (!cols) return null;
    let sum = 0, n = 0;
    cols.forEach(c => { const p = parseColor(c); if (p && p.a > 0.1) { sum += relLum(p); n++; } });
    return n ? sum / n : null;
  };
  // effective backdrop luminance under (x,y), skipping the nav itself
  const lumAt = (x, y) => {
    const stack = document.elementsFromPoint(x, y);
    for (const el of stack) {
      if (el === nav || nav.contains(el)) continue;
      if (el.dataset && el.dataset.nav) return el.dataset.nav === 'dark' ? 0 : 1;
      const cs = getComputedStyle(el);
      const bc = parseColor(cs.backgroundColor);
      if (bc && bc.a >= 0.5) return relLum(bc);
      const bg = cs.backgroundImage;
      if (bg && bg !== 'none') {
        const gl = gradientLum(bg);
        if (gl !== null) return gl;   // image backgrounds: unknown → keep walking down
      }
    }
    return 1;   // nothing opaque found → assume a light page backdrop
  };

  // the nav is position:fixed, so its box only moves on resize
  let navRect = null;
  window.addEventListener('resize', () => { navRect = null; }, { passive: true });

  function update() {
    const r = navRect || (navRect = nav.getBoundingClientRect());
    if (!r.width) { navRect = null; return; }
    const y = r.top + r.height / 2;
    const xs = [r.left + 70, (r.left + r.right) / 2, r.right - 70];
    let sum = 0, n = 0;
    xs.forEach(x => { const l = lumAt(Math.max(1, Math.min(x, innerWidth - 1)), y); sum += l; n++; });
    const dark = (sum / n) < 0.5;
    nav.classList.toggle('nav-on-dark', dark);
    nav.classList.toggle('nav-on-light', !dark);
  }

  // Three elementsFromPoint hit-tests, each walking the stack with getComputedStyle,
  // was one of the heavier things in a scroll frame — and it was running on every
  // frame to decide a light/dark boolean that only flips at section boundaries.
  // Sampling every ~60ms instead is 4× cheaper and the flip is still well inside the
  // time it takes a section edge to cross the bar. Route/theme changes call update()
  // directly, so those stay instant.
  // Registered in the scheduler's READ phase (Scroll.addRead): hit-testing needs
  // up-to-date layout, and running it after other subscribers have written styles
  // forced a full synchronous style+layout recalc of the whole document each sample.
  const SAMPLE_MS = 60;
  let lastSample = 0;
  ((Scroll.addRead || Scroll.add))(() => {
    const now = performance.now();
    if (now - lastSample < SAMPLE_MS) return;
    lastSample = now;
    update();
  });
  window.addEventListener('hashchange', () => setTimeout(update, 60));
  window.updateNavContrast = update;   // route/theme changes re-run this
  update();
}

function initActiveLinks() {
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href*="#"]'));
  const secId = l => (l.getAttribute('href') || '').split('#')[1];
  const sections = [...new Set(navLinks.map(secId))].map(id => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = navLinks.find(l => secId(l) === entry.target.id);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

function initMenu() {
  const nav      = document.getElementById('nav');
  const burger   = document.getElementById('nav-burger');
  const overlay  = document.getElementById('menu-overlay');
  const closeBtn = document.getElementById('menu-close');
  if (!burger || !overlay) return;
    function setMenu(open) {
      overlay.classList.toggle('open', open);
      if (nav) nav.classList.toggle('menu-open', open);   // lifts nav + morphs burger→X
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
      burger.focus();   // the burger is now both the open and the close control
    }

    // the burger toggles: hamburger opens, the X (same button) closes
    burger.addEventListener('click', () =>
      setMenu(!overlay.classList.contains('open')));
    if (closeBtn) closeBtn.addEventListener('click', () => setMenu(false));
    overlay.querySelectorAll('.menu-link').forEach(a =>
      a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) setMenu(false);
    });
}

function initFooterGrow() {
      const head = document.querySelector('.ft-head');
      if (!head) return;

      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) { head.style.setProperty('--ft-grow', '1'); return; }

      let lastP = null;
      function update() {
        const vh = Scroll.vh();
        // the centre point is stable under scale about center, so no measurement feedback.
        const r = Scroll.rect(head);
        const mid = (r.top + r.bottom) / 2;
        const start = vh;          // 0% when the heading's centre is at the viewport bottom
        const end   = vh * 0.5;    // 100% by the time its centre reaches mid-viewport
        let p = (start - mid) / (start - end);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        const v = p.toFixed(4);
        // clamped at 0 for most of the page — don't re-write the same value
        if (v !== lastP) { head.style.setProperty('--ft-grow', v); lastP = v; }
      }
      Scroll.add(update);
      update();
}

function initGarden() {
      const footer = document.querySelector('.footer');
      const garden = footer && footer.querySelector('.ft-garden');
      if (!garden) return;

      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const fine   = matchMedia('(pointer: fine)').matches;
      // compact = the one-column footer layouts (phone + tablet). Gates the mobile
      // redesign behaviors (depth planting, growth ceiling, control guard) so the
      // desktop garden keeps its original behavior.
      const compactMQ = matchMedia('(max-width: 1100px)');
      const phoneMQ   = matchMedia('(max-width: 640px)');
      const rnd  = (a, b) => a + Math.random() * (b - a);
      const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

      // gouache/watercolour palette (from the reference illustrations)
      const pick = a => a[(Math.random() * a.length) | 0];
      const CREAM  = ['#faf5e6', '#fbf7ec', '#f7f1df'];   // daisy petals (bright, to read on cream)
      const PETAL_EDGE = '#e2d5b0';                        // soft warm outline so petals pop
      const DISC   = '#e89a1c', DISC_HI = '#f6c740', DISC_SH = '#b9791a';  // orange centre
      const STEM   = ['#b06a4d', '#a95c42', '#bb765b'];              // terracotta stems
      const OLIVE  = ['#33361a', '#2b2e14', '#3c4020', '#454a24'];   // dark foliage
      const LAV    = ['#7c5fa6', '#684c90', '#8f73b8', '#5b4680', '#9a80c2'];  // lavender
      const LEAFG  = ['#5c7d3f', '#4a6b33', '#6f9450'];              // soft green stems/leaves

      // ---- inline-SVG plant builders (no image assets) ----
      // one soft tapered petal / lobe pointing up from the origin
      function petalPath(len, w, col, extra) {
        return `<path d="M0 0 C ${-w} ${(-len * 0.42).toFixed(1)} ${(-w * 0.55).toFixed(1)} ${-len} 0 ${-len} C ${(w * 0.55).toFixed(1)} ${-len} ${w} ${(-len * 0.42).toFixed(1)} 0 0 Z" fill="${col}" ${extra || ''}/>`;
      }
      function blade(x, y, ang, len, col) {
        const tx = x + Math.sin(ang * Math.PI / 180) * len, ty = y - Math.cos(ang * Math.PI / 180) * len;
        return `<path d="M${x} ${y} Q ${((x + tx) / 2 + rnd(-3, 3)).toFixed(1)} ${((y + ty) / 2).toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)}" stroke="${col}" stroke-width="${rnd(2.4, 3.6).toFixed(1)}" fill="none" stroke-linecap="round"/>`;
      }
      // deeply-lobed dark leaf (a fan of finger lobes) — the daisy-foliage look
      function frond(x, y, ang, len, col) {
        const fingers = 3 + ((Math.random() * 3) | 0);
        let g = `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${ang.toFixed(1)})">`;
        for (let i = 0; i < fingers; i++) {
          const fa = (i - (fingers - 1) / 2) * rnd(15, 21);
          const fl = len * (1 - Math.abs(i - (fingers - 1) / 2) * 0.1) * rnd(0.8, 1);
          g += `<g transform="rotate(${fa.toFixed(1)})">${petalPath(fl, rnd(6, 9), col)}</g>`;
        }
        return g + '</g>';
      }
      function wrap(w, h, inner) {
        return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><g filter="url(#ft-paint)">${inner}</g></svg>`;
      }

      // daisy — cream petals, orange stippled centre, terracotta stem, olive base fronds
      function buildDaisy() {
        const h = rnd(165, 245), w = 96, cx = w / 2, top = 28, bend = rnd(-15, 15);
        const stemC = pick(STEM), olive = pick(OLIVE), cream = pick(CREAM);
        const stem = `<path d="M${cx} ${h} C ${(cx + bend).toFixed(1)} ${(h * 0.6).toFixed(1)} ${(cx - bend).toFixed(1)} ${(h * 0.34).toFixed(1)} ${cx} ${top + 6}" stroke="${stemC}" stroke-width="${rnd(3.4, 4.6).toFixed(1)}" fill="none" stroke-linecap="round"/>`;
        let base = frond(cx + rnd(-4, 4), h - 2, rnd(-42, -22), rnd(48, 70), olive)
                 + frond(cx + rnd(-4, 4), h - 2, rnd(22, 42), rnd(48, 70), olive)
                 + frond(cx + rnd(-3, 3), h - 2, rnd(-10, 10), rnd(40, 58), olive);
        // dark calyx cupping the petals
        const calyx = `<path d="M${cx - 11} ${top + 2} q11 15 22 0 q-3 12 -11 12 q-8 0 -11 -12 z" fill="${olive}"/>`;
        const n = 11 + ((Math.random() * 4) | 0);
        let petals = '';
        for (let i = 0; i < n; i++) {
          const a = 360 / n * i + rnd(-4, 4), L = rnd(27, 35);
          petals += `<g transform="translate(${cx} ${top}) rotate(${a.toFixed(1)})">${petalPath(L, rnd(7, 10), cream, `stroke="${PETAL_EDGE}" stroke-width="1"`)}</g>`;
        }
        const cr = rnd(8.5, 10.5);
        let disc = `<circle cx="${cx}" cy="${top}" r="${cr.toFixed(1)}" fill="${DISC}"/>`;
        for (let i = 0; i < 16; i++) { const aa = rnd(0, 6.28), rr = rnd(0, cr * 0.82); disc += `<circle cx="${(cx + Math.cos(aa) * rr).toFixed(1)}" cy="${(top + Math.sin(aa) * rr).toFixed(1)}" r="${rnd(0.8, 1.6).toFixed(1)}" fill="${Math.random() < 0.5 ? DISC_HI : DISC_SH}"/>`; }
        const head = `<g class="head">${calyx}${petals}${disc}</g>`;
        return { svg: wrap(w, h, base + stem + head), h };
      }

      // lavender — green stem, thin leaves, purple floret spike
      function buildLavender() {
        const h = rnd(150, 215), w = 56, cx = w / 2;
        const green = pick(LEAFG);
        const stem = `<path d="M${cx} ${h} C ${(cx + rnd(-6, 6)).toFixed(1)} ${(h * 0.6).toFixed(1)} ${(cx + rnd(-4, 4)).toFixed(1)} ${(h * 0.42).toFixed(1)} ${cx} ${(h * 0.3).toFixed(1)}" stroke="${green}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;
        const leaves = blade(cx, h, rnd(-32, -18), rnd(46, 66), green) + blade(cx, h, rnd(18, 32), rnd(46, 66), green);
        const spikeBot = h * 0.34, spikeTop = 12;
        let florets = '';
        const rows = 11 + ((Math.random() * 6) | 0);
        for (let i = 0; i <= rows; i++) {
          const t = i / rows, yy = spikeBot + (spikeTop - spikeBot) * t, spread = (1 - t) * 7 + 3;
          for (let k = 0; k < 2 + ((Math.random() * 2) | 0); k++)
            florets += `<circle cx="${(cx + rnd(-spread, spread)).toFixed(1)}" cy="${(yy + rnd(-3, 3)).toFixed(1)}" r="${rnd(2.6, 4.3).toFixed(1)}" fill="${pick(LAV)}" opacity="${rnd(0.78, 1).toFixed(2)}"/>`;
        }
        return { svg: wrap(w, h, leaves + stem + `<g class="head">${florets}</g>`), h };
      }

      // foliage clump — a low fan of dark olive fronds
      function buildFoliage() {
        const h = rnd(80, 130), w = 110, cx = w / 2;
        const olive = pick(OLIVE);
        let g = '';
        const n = 4 + ((Math.random() * 3) | 0);
        for (let i = 0; i < n; i++) g += frond(cx + rnd(-10, 10), h - 2, (i - (n - 1) / 2) * rnd(20, 30), rnd(h * 0.7, h * 1.05), olive);
        return { svg: wrap(w, h, `<g class="head">${g}</g>`), h };
      }

      // shared paint-texture filter (gives edges a hand-painted wobble; static, so cheap)
      const defs = document.createElement('div');
      defs.setAttribute('aria-hidden', 'true');
      defs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
      defs.innerHTML = `<svg><defs><filter id="ft-paint" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.028 0.04" numOctaves="2" seed="6" result="n"/>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G"/>
      </filter></defs></svg>`;
      footer.appendChild(defs);

      // ---- ridge profile: sample where the land begins per x, so plants root ON it ----
      const landImg = footer.querySelector('.ft-land');
      let ridgeProf = null, nightProf = null, landTop = 0, landH = 0, landW = 0, footerW = 0;
      // requireDark: day art needs the dark-soil check (skips its cream ridge
      // outline); the night art's band starts with teal/purple over transparent
      // sky, so opacity alone marks its top edge.
      function buildRidge(img, requireDark) {
        try {
          const W = img.naturalWidth, H = img.naturalHeight;
          if (!W) return null;
          const c = document.createElement('canvas'); c.width = W; c.height = H;
          const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0);
          const d = ctx.getImageData(0, 0, W, H).data;
          const S = 72, prof = [];
          for (let s = 0; s < S; s++) {
            const col = Math.min(W - 1, ((s + 0.5) / S * W) | 0);
            let ridge = H * 0.45;
            for (let y = 0; y < H; y++) { const i = (y * W + col) * 4; if (d[i + 3] > 200 && (!requireDark || (d[i] + d[i + 1] + d[i + 2]) / 3 < 72)) { ridge = y; break; } }
            prof.push(ridge / H);
          }
          return prof;
        } catch (e) { return null; }
      }
      function refreshLand() {
        const lr = landImg.getBoundingClientRect();
        const fr = footer.getBoundingClientRect();
        landH = lr.height; landW = lr.width;              // land scales with the viewport (100vw / 150% / 340%)
        footerW = fr.width;
        // measured, not assumed: phones lift the land off the footer bottom (see
        // .ft-land `bottom` in the ≤640 block) so the ground strip has clean room
        landTop = lr.top - fr.top;
      }
      // the land is centred and can be wider than the footer, so remap a footer-x
      // fraction onto the actual land-image column before sampling the ridge
      function imgFrac(xf) {
        if (!landW) return clamp(xf, 0, 1);
        return clamp(0.5 + (clamp(xf, 0, 1) - 0.5) * (footerW / landW), 0, 1);
      }
      function ridgeFrac(xf) {
        // compact night uses the profile sampled from the night art (the day
        // profile put roots in the night sky); desktop keeps the day profile
        const prof = (compactMQ.matches && document.body.classList.contains('night') && nightProf) || ridgeProf;
        if (!prof) return 0.42;
        const t = imgFrac(xf) * (prof.length - 1), i = t | 0, f = t - i;
        return prof[i] * (1 - f) + prof[Math.min(prof.length - 1, i + 1)] * f;
      }
      // footer-y of the soil at fraction xf (nudged a touch below the ridge so stems look planted)
      function soilY(xf) { return landTop + ridgeFrac(xf) * landH + 7; }
      // rooting point for a plant: depthPx (0 = on the ridge) sinks the base that
      // many px INTO the ground below its own column's ridge — never above it (no
      // floating roots) and never into the bottom-bar strip (socials + credit)
      // phones add a 176px ground strip (.footer::after) under the bar — keep the
      // sunken roots above its opaque zone so the garden reads planted, not dipped
      // in the dark band
      const BAR_RESERVE = phoneMQ.matches ? 196 : 96;
      function plantY(xf, depthPx) {
        const soil = soilY(xf);
        if (!depthPx) return soil;
        return Math.max(soil, Math.min(soil + depthPx, footer.clientHeight - BAR_RESERVE));
      }
      ridgeProf = buildRidge(landImg, true);
      refreshLand();
      // the night meadow art (swapped in via `body.night .ft-land` in index.html)
      // has its own ridge line — sample it so night roots land on IT. Sampled
      // lazily on the first night switch: the PNG is 1.2MB and a day-mode visitor
      // should never download it just for ridge geometry (at night the CSS swap
      // fetches it anyway, so the Image() here rides the same cache entry).
      let nightImgStarted = false;
      function ensureNightProf() {
        if (nightImgStarted) return;
        nightImgStarted = true;
        const nightImg = new Image();
        nightImg.addEventListener('load', () => { nightProf = buildRidge(nightImg, false); reroot(); });
        nightImg.src = '/assets/land meadow-night.png';
      }
      if (document.body.classList.contains('night')) ensureNightProf();
      else {
        const nightWatch = new MutationObserver(() => {
          if (document.body.classList.contains('night')) { ensureNightProf(); nightWatch.disconnect(); }
        });
        nightWatch.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      }

      // ---- populate the garden in a few tight clumps ----
      const N = 20, plants = [];
      const nc = 5 + ((Math.random() * 2) | 0);            // 5–6 clumps along the ridge
      const centers = [];
      for (let c = 0; c < nc; c++) centers.push(clamp((c + 0.5) / nc * 100 + rnd(-5, 5), 7, 93));
      for (let i = 0; i < N; i++) {
        const roll = Math.random();
        const built = roll < 0.5 ? buildDaisy() : roll < 0.78 ? buildLavender() : buildFoliage();
        const el = document.createElement('div');
        el.className = 'plant';
        const xPct = clamp(centers[i % nc] + rnd(-6, 6), 2, 98);   // bunched tight around a clump centre
        // compact layouts: every base sinks 4–28px below its column's ridge (deeper
        // = painted in front), so stems visibly emerge FROM the dark ground and
        // garden + land read as one element, not a row hovering on a strip
        const depthPx = compactMQ.matches ? rnd(4, 28) : 0;
        const baseY = plantY(xPct / 100, depthPx);
        el.style.left = xPct + '%';
        el.style.bottom = (footer.clientHeight - baseY).toFixed(1) + 'px';   // rooted in the soil
        el.style.zIndex = String(1 + ((Math.random() * 2) | 0) + Math.round(depthPx / 12));
        // phones: start smaller so the bed stays proportionate to the shorter meadow
        const g0 = phoneMQ.matches ? rnd(0.4, 0.7) : rnd(0.55, 0.95);
        el.style.setProperty('--g', g0.toFixed(3));
        // sway lives on a wrapper div (composited) so the paint filter stays static
        const stalk = document.createElement('div');
        stalk.className = 'sway';
        stalk.style.cssText = `--swayA:${rnd(1.4, 3.4).toFixed(1)}deg;--sway:${rnd(4, 7).toFixed(1)}s;--sway-d:${rnd(-3, 0).toFixed(1)}s`;
        stalk.innerHTML = built.svg;
        el.appendChild(stalk);
        garden.appendChild(el);
        plants.push({ el, g: g0, max: 1.75, fullH: built.h, xPct, baseY, depthPx });
      }

      // keep the whole garden bed glued to the ridge at every viewport size
      function reroot() {
        plants.forEach(pl => { pl.baseY = plantY(pl.xPct / 100, pl.depthPx); pl.el.style.bottom = (footer.clientHeight - pl.baseY).toFixed(1) + 'px'; });
      }
      let rz = 0;
      function relayout() {
        if (rz) return;
        rz = requestAnimationFrame(() => { rz = 0; refreshLand(); reroot(); });
      }
      window.addEventListener('resize', relayout, { passive: true });
      window.addEventListener('orientationchange', relayout, { passive: true });
      if (typeof ResizeObserver === 'function') {
        const ro = new ResizeObserver(relayout);
        ro.observe(footer);
        ro.observe(landImg);   // night theme swaps the meadow art/size → re-root the bed
      }
      // the ridge is sampled from the land art — if it decodes/reflows after init, rebuild + re-root
      if (!landImg.complete || !landImg.naturalWidth) {
        landImg.addEventListener('load', () => { ridgeProf = buildRidge(landImg, true); refreshLand(); reroot(); }, { once: true });
      }

      // ---- watering-can cursor + droplet FX layer ----
      const fx = document.createElement('div');
      fx.className = 'ft-fx';
      footer.appendChild(fx);

      let cursor = null, tipX = 44, tipY = 43;          // spray tip (spout rose) within the 60-viewBox
      if (fine && !reduce) {
        cursor = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cursor.setAttribute('viewBox', '0 0 60 60');
        cursor.setAttribute('width', '58'); cursor.setAttribute('height', '58');
        cursor.setAttribute('class', 'ft-cursor');
        // dusty-terracotta watering can, tilted to pour down-right (matches the reference art)
        cursor.innerHTML = `
          <g filter="url(#ft-paint)">
            <g transform="rotate(20 27 27)">
              <path d="M16 21 Q7.5 22 8 29 Q8.3 34 15 34" fill="none" stroke="#c9856f" stroke-width="3.2" stroke-linecap="round"/>
              <path d="M34.5 24 L47 29 L49.5 33.5 L46 37 L33 31 Z" fill="#d69880"/>
              <ellipse cx="47.5" cy="34.5" rx="2.6" ry="3.8" transform="rotate(28 47.5 34.5)" fill="#cf8f7b"/>
              <path d="M16 22 Q16 18 20 18 L32 18 Q36 18 36 22 L35 35 Q35 38 31 38 L21 38 Q16 38 16 34 Z" fill="#d99f8c"/>
              <ellipse cx="26" cy="18" rx="8.2" ry="2.6" fill="#cf8f7b"/>
              <path d="M16.5 16 Q26 1 35.5 15" fill="none" stroke="#d99f8c" stroke-width="4.6" stroke-linecap="round"/>
              <path d="M24 29.5 C 20.5 26.5 21.6 23.4 24 25.2 C 26.4 23.4 27.5 26.5 24 29.5 Z" fill="#a85a48"/>
            </g>
          </g>
          <g class="tip-spray">
            <circle cx="44" cy="43" r="1.5" fill="#6cc2ee" style="--mx:2px;--my:12px"/>
            <circle cx="44" cy="43" r="1.2" fill="#6cc2ee" style="--mx:6px;--my:13px;animation-delay:.3s"/>
            <circle cx="44" cy="43" r="1.3" fill="#6cc2ee" style="--mx:9px;--my:11px;animation-delay:.6s"/>
          </g>`;
        document.body.appendChild(cursor);
      }

      // "click to grow" hint. Gated on the same `fine && !reduce` as the can —
      // a touch device has no hover state to reveal it with, and it would just
      // be a label stuck to the screen.
      let tip = null;
      if (cursor) {
        tip = document.createElement('div');
        tip.className = 'ft-tip';
        tip.textContent = 'Click to grow';
        tip.setAttribute('aria-hidden', 'true');   // decorative: the garden is not a control
        document.body.appendChild(tip);
      }

      // ---- droplet particle system (footer coords) ----
      const GRAV = 0.42, drops = [];
      let raf = 0;

      function emit(fx0, fy0, n, spread, vy0) {
        const cap = 90;
        for (let i = 0; i < n && drops.length < cap; i++) {
          const r = rnd(2.4, 4.6);
          const d = document.createElement('div');
          d.className = 'ft-drop';
          d.style.width = d.style.height = r.toFixed(1) + 'px';
          fx.appendChild(d);
          drops.push({ el: d, x: fx0 + rnd(-4, 4), y: fy0 + rnd(-3, 3), vx: rnd(-spread, spread), vy: vy0 + rnd(0, 1.6), r, a: 1, dead: false });
        }
        if (!raf) raf = requestAnimationFrame(tick);
      }
      function tick() {
        const fw = footer.clientWidth;
        for (let i = drops.length - 1; i >= 0; i--) {
          const d = drops[i];
          d.vy += GRAV; d.x += d.vx; d.y += d.vy;
          const g = soilY(d.x / fw);                             // dissolve at the land ridge
          if (d.y >= g) { d.y = g; d.a -= 0.16; d.vx *= 0.7; }   // splash + dissolve on ground
          if (d.a <= 0) { d.el.remove(); drops.splice(i, 1); continue; }
          d.el.style.transform = `translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px)`;
          d.el.style.opacity = d.a.toFixed(2);
        }
        raf = drops.length ? requestAnimationFrame(tick) : 0;
      }

      // ---- pointer wiring ----
      const toFooter = e => { const r = footer.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top, r }; };

      let lastSpray = 0;
      footer.addEventListener('pointerenter', () => { footer.classList.add('garden-live'); if (cursor) cursor.classList.add('on'); });
      footer.addEventListener('pointerleave', () => { footer.classList.remove('garden-live'); if (cursor) cursor.classList.remove('on'); if (tip) tip.classList.remove('on'); });

      footer.addEventListener('pointermove', e => {
        if (cursor) cursor.style.transform = `translate(${e.clientX - tipX}px, ${e.clientY - tipY}px)`;
        if (tip) {
          // sits right of the pointer: the can's art hangs up-and-left of it
          // (58px box drawn from the spray tip), so this is the one side that
          // stays clear at any angle of approach.
          tip.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 2}px)`;
          const q = toFooter(e);
          tip.classList.toggle('on', !onControl(e.target) && nearPlant(q));
        }
        if (reduce) return;
        const now = performance.now();
        if (now - lastSpray > 120) {                 // subtle continuous mist while moving
          lastSpray = now;
          const p = toFooter(e);
          if (p.y < soilY(p.x / p.r.width)) emit(p.x, p.y + 6, 1, 0.5, 0.4);
        }
      }, { passive: true });

      // the reach test the hint and the click share — same 80px radius to the
      // nearest point on a plant's stem, so the label appears exactly where a
      // click lands rather than approximating it
      const GROW_REACH = 80;
      function nearPlant(p) {
        return plants.some(pl => {
          const bx = p.r.width * pl.xPct / 100;
          const by = pl.baseY;
          const cy = clamp(p.y, by - pl.fullH * pl.g - 8, by);
          return Math.hypot(p.x - bx, p.y - cy) < GROW_REACH;
        });
      }
      const onControl = t => !!(t && t.closest && t.closest('.ft-head-btn, .ft-social'));

      footer.addEventListener('pointerdown', e => {
        // taps on the real controls (headline button, social links) are just taps —
        // they must never water/grow the garden underneath the control being pressed
        if (onControl(e.target)) return;
        const p = toFooter(e);
        emit(p.x, p.y + 6, reduce ? 5 : 16, 2.6, 0.6);   // click burst
        // growth ceiling: plants stop just below the text block instead of
        // climbing over "Grow together?"
        let ceil = -Infinity;
        const inner = footer.querySelector('.ft-inner');
        if (inner) ceil = inner.getBoundingClientRect().bottom - p.r.top + 18;
        plants.forEach(pl => {
          const bx = p.r.width * pl.xPct / 100;          // plant base x in footer coords
          const by = pl.baseY;                           // this plant's rooted soil point
          const cy = clamp(p.y, by - pl.fullH * pl.g - 8, by);  // nearest point on the stem
          const dist = Math.hypot(p.x - bx, p.y - cy);
          if (dist < 80) {
            const gCap = Math.min(pl.max, (pl.baseY - ceil) / pl.fullH);
            if (pl.g < gCap) {
              pl.g = Math.min(gCap, pl.g + rnd(0.14, 0.24));
              pl.el.style.setProperty('--g', pl.g.toFixed(3));
            } else {
              // at its ceiling (full height, or as tall as the layout allows) →
              // retrigger the bloom pulse instead of growing further
              pl.el.classList.remove('bloomed'); void pl.el.offsetWidth; pl.el.classList.add('bloomed');
            }
          }
        });
      });
}

function initReveal(root) {
  const els = root.querySelectorAll('.reveal');
  if (!els.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
  els.forEach(el => io.observe(el));
}

/* ════ LOADING SCREEN controller (markup lives at top of <body> in index.html) ══
   Pac-Man chomps 4 dots while assets settle. Shown on the cold load and when
   entering the heavy instant-swap views (Playground, About). Hides the instant
   the gated assets are ready, but never before a min (no flash) and never past a
   hard cap (never traps the user). Exposed as window.pageLoader for the router. */
const LOADER_LINES = [
  'Waka waka… almost there.',
  'Chomping through the pixels…',
  'Munching megabytes…',
  'Fetching things worth the wait…',
  'Lining up the pixels just so…',
  'Collecting the good dots…',
  'Warming up the crayons…',
  'Chasing down the last few bytes…',
  'Powering up… mind the ghosts.',
  'Just one more dot…',
];

const pageLoader = (() => {
  const el = document.getElementById('page-loader');
  if (!el) return { show(){}, hide(){}, showForView(){} };
  const lineEl = el.querySelector('.pl-line');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rotateTimer = null, hideTimer = null, visible = true;

  const pick = () => LOADER_LINES[Math.floor(Math.random() * LOADER_LINES.length)];
  function setLine(txt) {
    if (!lineEl) return;
    if (reduce) { lineEl.textContent = txt; return; }
    lineEl.classList.add('pl-line-swap');                         // fade out
    setTimeout(() => { lineEl.textContent = txt; lineEl.classList.remove('pl-line-swap'); }, 300);
  }
  function startRotation() {
    if (lineEl) lineEl.textContent = pick();
    stopRotation();
    if (!reduce) rotateTimer = setInterval(() => setLine(pick()), 1600);
  }
  function stopRotation() { if (rotateTimer) { clearInterval(rotateTimer); rotateTimer = null; } }

  function reveal() {
    clearTimeout(hideTimer);
    el.style.display = '';
    el.classList.remove('is-hiding');
    document.documentElement.classList.add('pl-lock');
    document.body.classList.add('pl-lock');
    visible = true;
    startRotation();
  }
  function hide() {
    if (!visible) return;
    visible = false;
    stopRotation();
    el.classList.add('is-hiding');
    document.documentElement.classList.remove('pl-lock');
    document.body.classList.remove('pl-lock');
    hideTimer = setTimeout(() => { if (!visible) el.style.display = 'none'; }, reduce ? 0 : 420);
  }

  // hide once `ready` resolves OR the cap fires, but never before `min`
  function settle(ready, { min, cap }) {
    const minWait = new Promise(r => setTimeout(r, reduce ? Math.min(min, 600) : min));
    const capped  = Promise.race([
      Promise.resolve(ready).catch(() => {}),
      new Promise(r => setTimeout(r, cap)),
    ]);
    Promise.all([capped, minWait]).then(hide);
  }

  function show(ready, opts) { reveal(); settle(ready, opts || { min: 1200, cap: 4000 }); }

  function showForView(id) {
    const view = document.getElementById(id);
    reveal();
    const imgs = view ? Array.from(view.querySelectorAll('img')).slice(0, 6) : [];
    const ready = Promise.all(imgs.map(img => (img.decode ? img.decode().catch(() => {}) : Promise.resolve())));
    settle(ready, { min: 500, cap: 1500 });
  }

  return { show, hide, reveal, showForView };
})();
window.pageLoader = pageLoader;

// cold load: the loader is already painted from markup — hold it until the web
// fonts AND every image painted in the first screen have decoded, so the hero
// reveals fully formed instead of half-baked (assets popping in one after another,
// which was very visible on mobile). We gate on the whole hero — shader, sun, moon,
// clouds, the recorder disks/caps/play button — not just the shader. Below-the-fold
// sections still stream in on scroll as before. (Script is deferred, so the DOM
// and .hero exist here.)
(function bootFirstLoad() {
  const fonts = (document.fonts && document.fonts.ready) || Promise.resolve();
  const hero  = document.querySelector('.hero');

  // resolve when an image is both downloaded and decoded (or has failed — never hang)
  const imgReady = (img) => {
    if (!img) return Promise.resolve();
    if (img.decode) return img.decode().catch(() => {});   // waits for load + decode
    if (img.complete) return Promise.resolve();
    return new Promise((r) => {
      img.addEventListener('load', r, { once: true });
      img.addEventListener('error', r, { once: true });
    });
  };

  const heroImgs = hero ? Array.from(hero.querySelectorAll('img')) : [];
  const shaderImg = document.querySelector('.hero-shader');           // belt-and-suspenders
  if (shaderImg && heroImgs.indexOf(shaderImg) === -1) heroImgs.push(shaderImg);

  const ready = Promise.all([fonts, ...heroImgs.map(imgReady)]);
  // cap raised (we now wait for more assets); on slow mobile the cap still guarantees
  // the user is never trapped, but the common case now holds until the hero is complete.
  pageLoader.show(ready, { min: 1200, cap: 8000 });
})();

class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = NAV_HTML + MENU_HTML + CONTACT_HTML;
    initTheme();
    initNavScroll();
    initNavContrast();
    initActiveLinks();
    initMenu();
    initContact();
    initNavMusic();
  }
}
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = FOOTER_HTML;
    initFooterGrow();
    initGarden();
    initReveal(this);
  }
}
customElements.define('site-nav', SiteNav);
customElements.define('site-footer', SiteFooter);

/* ════ GLOBAL DOT CURSOR — small inverse-blend dot that trails the pointer.
   Fine-pointer devices only; leaves touch/coarse devices untouched. ════ */
(function initDotCursor() {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!fine.matches) return;

  const dot = document.createElement('div');
  dot.className = 'dot-cursor';
  dot.setAttribute('aria-hidden', 'true');
  const label = document.createElement('span');
  label.className = 'dot-label';
  label.textContent = 'Press play, stranger';
  dot.appendChild(label);
  document.body.appendChild(dot);
  document.documentElement.classList.add('dot-cursor-on');

  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let shown = false, raf = 0;

  const HOT = 'a,button,[role="button"],input,textarea,select,label,summary,[data-cursor="hot"]';

  // paint in a rAF so multiple pointer events in a frame collapse to one write,
  // but with NO easing — the dot sits exactly on the pointer (no trailing lag).
  function render() {
    raf = 0;
    dot.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  }
  function tick() { if (!raf) raf = requestAnimationFrame(render); }

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; dot.classList.add('on'); }
    const overReel = !!(e.target.closest && e.target.closest('.recorder'));
    // any element can claim the labelled cursor by declaring its own copy
    const labelled = !overReel && e.target.closest && e.target.closest('[data-cursor-label]');
    if (overReel) label.textContent = 'Press play, stranger';
    else if (labelled) label.textContent = labelled.getAttribute('data-cursor-label');
    dot.classList.toggle('reel', overReel);
    dot.classList.toggle('labelled', !!labelled);
    dot.classList.toggle('hot', !overReel && !labelled && !!(e.target.closest && e.target.closest(HOT)));
    tick();
  }, { passive: true });

  window.addEventListener('pointerdown', () => dot.classList.add('down'));
  window.addEventListener('pointerup', () => dot.classList.remove('down'));
  document.addEventListener('mouseleave', () => { shown = false; dot.classList.remove('on'); });
  document.addEventListener('mouseenter', () => { shown = true; dot.classList.add('on'); });
})();


