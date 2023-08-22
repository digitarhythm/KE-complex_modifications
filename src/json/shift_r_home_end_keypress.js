// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'right_control to end; and if held, home',
        rules: [
          {
            description: 'Map right control to end; and if held, home',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'right_control' },
                to: { key_code: 'end' },
                to_if_held_down: { key_code: 'home' },
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
