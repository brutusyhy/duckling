import { createSvgIcon } from '@mui/material';

export const ClickhouseIcon = createSvgIcon(
  <svg viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg">
    <path d="m0 7h1v1h-1z" fill="#f00" />
    <path
      d="m0 0h1v7h-1z m2 0h1v8h-1zm2 0h1v8h-1zm2 0h1v8h-1zm2 3.25h1v1.5h-1z"
      fill="#fc0"
    />
  </svg>,
  'Clickhouse',
);

export const DuckdbIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    width="300"
    height="300"
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h300v300H0z" />
      </clipPath>
    </defs>
    <g>
      <path
        d="M0 148c-81.853 0-148-66.146-148-148S-81.853-148 0-148c81.854 0 148 66.146 148 148S81.854 148 0 148z"
        transform="translate(150 150)"
      />
      <path
        fill="#FFF000"
        d="M-61.314 0c0 33.828 27.486 61.314 61.314 61.314 33.829 0 61.314-27.486 61.314-61.314S33.829-61.314 0-61.314c-33.828 0-61.314 27.486-61.314 61.314z"
        transform="translate(119.191 150)"
      />
      <path
        fill="#FFF000"
        d="M3.474-21.898h-28.996v43.796H3.474c12.082 0 22.049-9.968 22.049-22.049 0-12.082-9.967-21.747-22.049-21.747z"
        transform="translate(225.661 149.849)"
      />
    </g>
  </svg>,
  'DuckDB',
);

export const SqliteIcon = createSvgIcon(
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <linearGradient
      id="a"
      gradientTransform="matrix(0 11.486 11.486 0 -510.889 1363.307)"
      gradientUnits="userSpaceOnUse"
      x1="-118.318"
      x2="-116.751"
      y1="45.638"
      y2="45.638"
    >
      <stop offset="0" stopColor="#97d9f6" />
      <stop offset=".92" stopColor="#0f80cc" />
      <stop offset="1" stopColor="#0f80cc" />
    </linearGradient>
    <path
      d="m23.192 3.242h-17.569a2.147 2.147 0 0 0 -2.141 2.141v19.376a2.147 2.147 0 0 0 2.141 2.141h11.572c-.132-5.758 1.835-16.932 5.997-23.658z"
      fill="#0f80cc"
    />
    <path
      d="m22.554 3.867h-16.931a1.518 1.518 0 0 0 -1.516 1.516v17.962a42.01 42.01 0 0 1 13.569-2.684 123.555 123.555 0 0 1 4.878-16.794z"
      fill="url(#a)"
    />
    <path
      d="m27.29 2.608c-1.2-1.073-2.66-.642-4.1.634-.213.19-.426.4-.638.625a25.4 25.4 0 0 0 -5.452 11.133 10.178 10.178 0 0 1 .634 1.822c.036.14.069.272.1.384.062.265.1.437.1.437s-.022-.083-.113-.346l-.059-.17c-.01-.027-.023-.059-.038-.094-.16-.373-.6-1.16-.8-1.5-.167.493-.315.954-.438 1.371a12.131 12.131 0 0 1 .908 2.8s-.03-.115-.171-.515a19.037 19.037 0 0 0 -.9-1.708 4.037 4.037 0 0 0 -.264 1.724 6.009 6.009 0 0 1 .493 1.383c.334 1.283.566 2.846.566 2.846s.008.1.02.263a26.145 26.145 0 0 0 .065 3.205 11.362 11.362 0 0 0 .584 3.1l.18-.1a13.859 13.859 0 0 1 -.478-4.628 35.269 35.269 0 0 1 1.938-9.688c2.01-5.308 4.8-9.568 7.35-11.6-2.326 2.1-5.474 8.9-6.417 11.418a45.656 45.656 0 0 0 -2.254 8 6.211 6.211 0 0 1 3.284-3.404s1.233-1.521 2.674-3.693a26.206 26.206 0 0 0 -2.755.733c-.7.294-.889.394-.889.394a23.939 23.939 0 0 1 4.215-2.007c2.676-4.215 5.592-10.2 2.656-12.824"
      fill="#003b57"
    />
  </svg>,
  'Sqlite',
);
export const MySqlIcon = createSvgIcon(
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd">
      <path
        d="m8.785 6.865a3.055 3.055 0 0 0 -.785.1v.035h.038a6.461 6.461 0 0 0 .612.785c.154.306.288.611.441.917.019-.019.038-.039.038-.039a1.074 1.074 0 0 0 .4-.957 4.314 4.314 0 0 1 -.23-.4c-.115-.191-.364-.287-.517-.44"
        fill="#5d87a1"
      />
      <path
        d="m27.78 23.553a8.849 8.849 0 0 0 -3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467 4.467 0 0 0 .995 1.167c.4.306.8.611 1.225.879.745.461 1.588.728 2.314 1.187.422.268.842.612 1.264.9.21.153.343.4.611.5v-.058a3.844 3.844 0 0 0 -.291-.613c-.191-.19-.383-.363-.575-.554a9.118 9.118 0 0 0 -1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69 7.69 0 0 0 1.321-.308c.65-.172 1.243-.133 1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338 25.338 0 0 0 -3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594 7.594 0 0 1 -.776-1.457c-.548-1.04-1.079-2.193-1.551-3.293a20.236 20.236 0 0 0 -.965-2.157 19.078 19.078 0 0 0 -7.323-7.084 9.07 9.07 0 0 0 -2.421-.776c-.474-.02-.946-.057-1.419-.075a7.55 7.55 0 0 1 -.869-.664c-1.082-.685-3.862-2.157-4.658-.208-.51 1.231.758 2.441 1.193 3.066a8.866 8.866 0 0 1 .965 1.419c.133.322.171.663.3 1a22.556 22.556 0 0 0 .987 2.538 8.946 8.946 0 0 0 .7 1.172c.153.209.417.3.474.645a5.421 5.421 0 0 0 -.436 1.419 8.336 8.336 0 0 0 .549 6.358c.3.473 1.022 1.514 1.987 1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53v.184s.483 1.061.723 1.6a10.813 10.813 0 0 0 2.4 2.59 3.514 3.514 0 0 1 .876 1.167v.343h.427a1.054 1.054 0 0 0 -.427-.788 9.4 9.4 0 0 1 -.959-1.16 24.992 24.992 0 0 1 -2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266 7.266 0 0 0 -.884 1.313 11.419 11.419 0 0 0 -.517 2.921c-.073.02-.037 0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756 8.756 0 0 1 -.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767 7.767 0 0 1 -.663-1.237c-.439-1.076-.661-2.276-1.139-3.36a10.4 10.4 0 0 0 -.921-1.489 9.586 9.586 0 0 1 -1.015-1.507c-.092-.213-.221-.561-.074-.793a.3.3 0 0 1 .259-.252c.238-.212.921.058 1.16.174a9.2 9.2 0 0 1 1.824.967c.258.194.866.685.866.685h.18c.612.133 1.3.037 1.876.21a12.247 12.247 0 0 1 2.755 1.32 16.981 16.981 0 0 1 5.969 6.545c.23.439.327.842.537 1.3.4.94.9 1.9 1.3 2.814a12.578 12.578 0 0 0 1.36 2.564c.286.4 1.435.612 1.952.822a13.7 13.7 0 0 1 1.32.535c.651.4 1.3.861 1.913 1.3.305.23 1.262.708 1.32 1.091"
        fill="#00758f"
      />
    </g>
  </svg>,
  'MySql',
);
export const PostgresIcon = createSvgIcon(
  <svg
    viewBox="0 0 256 264"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m255.007926 158.085617c-1.534817-4.648204-5.555732-7.886338-10.756138-8.663797-2.451806-.365968-5.260121-.209885-8.5828.475344-5.79163 1.194864-10.088646 1.649515-13.224498 1.738199 11.836304-19.985146 21.461431-42.775649 27.002383-64.2288041 8.959409-34.6882956 4.171677-50.4911224-1.423076-57.639612-14.806615-18.9191686-36.409349-29.08349193-62.472277-29.39506699-13.902042-.1696813-26.107862 2.57537182-32.474162 4.5488776-5.928203-1.04528407-12.302781-1.6294134-18.991298-1.73760739-12.535723-.19983372-23.612896 2.53280369-33.077801 8.14943188-5.2412013-1.77130717-13.6501805-4.26922865-23.3622174-5.86375983-22.8425312-3.75013395-41.2520647-.82771362-54.7177829 8.68508083-16.30595847 11.5182263-23.86534877 31.5299769-22.46710397 59.4800924.44341802 8.8742725 5.4079261 35.8736996 13.22390767 61.4802036 4.49212 14.717339 9.282217 26.939713 14.2372655 36.329533 7.0266975 13.314956 14.5452933 21.15636 22.9861987 23.971769 4.7315658 1.576795 13.3273718 2.680019 22.3689607-4.848628 1.1457921 1.387012 2.6741062 2.766337 4.7037783 4.046928 2.5765543 1.625275 5.7277783 2.953164 8.8742725 3.740084 11.3414504 2.83551 21.9645639 2.126041 31.0274369-1.847576.055575 1.611677.098734 3.151816.13539 4.481479.060305 2.157376.119427 4.272184.198651 6.249829.536832 13.374669 1.446725 23.773709 4.142707 31.049311.147806.40085.347048 1.010402.557524 1.65661 1.344444 4.118467 3.594051 11.012139 9.315326 16.411788 5.925838 5.592388 13.092656 7.30812 19.656425 7.307529 3.291935 0 6.433108-.431594 9.187621-1.022227 9.820822-2.104166 20.973672-5.310965 29.041515-16.798448 7.627381-10.860194 11.335538-27.216998 12.006577-52.990817.08691-.728388.167317-1.424259.244767-2.087612.052028-.447557.105238-.905164.159039-1.361589l1.797321.157856.462929.031335c10.002328.455834 22.232388-1.665478 29.743298-5.154291 5.935298-2.754512 24.953792-12.794679 20.475861-26.351445" />
    <path
      d="m237.905589 160.722476c-29.739751 6.13454-31.784203-3.934596-31.784203-3.934596 31.400499-46.593183 44.526854-105.7362772 33.199002-120.2112149-30.903279-39.48489605-84.398411-20.8110854-85.291159-20.3262817l-.287335.0514365c-5.875585-1.2196952-12.451178-1.9463095-19.841478-2.0669192-13.45685-.2205266-23.664333 3.5278337-31.409959 9.4016443 0 0-95.43005977-39.3134411-90.9917411 49.4440647.9441848 18.8825127 27.0638707 142.8734223 58.2184204 105.4223373 11.3869746-13.694522 22.3890623-25.273644 22.3890623-25.273644 5.4646836 3.630115 12.0065774 5.481829 18.8647764 4.816702l.532692-.452287c-.165542 1.700361-.089866 3.363474.213432 5.33225-8.025866 8.967094-5.667473 10.541524-21.7115193 13.844101-16.2344203 3.345737-6.6973857 9.302319-.4706143 10.859012 7.5487482 1.887778 25.0129146 4.561884 36.8131546-11.956915l-.470614 1.884822c3.14472 2.518615 5.352942 16.383409 4.982836 28.951649-.370106 12.568832-.617238 21.197746 1.860582 27.9377s4.947362 21.90485 26.038688 17.385534c17.623797-3.776739 26.756434-13.563862 28.026975-29.889331.901616-11.606318 2.94193-9.890586 3.070817-20.267159l1.636508-4.91248c1.887187-15.733063.299751-20.808721 11.15758-18.447963l2.638633.231759c7.991575.363603 18.450919-1.285321 24.589598-4.138568 13.218586-6.13454 21.058217-16.376905 8.024683-13.685653z"
      fill="#336791"
    />
    <g fill="#fff">
      <path d="m108.076342 81.5250624c-2.679427-.3730624-5.106993-.0277876-6.334966.9016166-.69114.5232332-.904572 1.1292379-.961921 1.546642-.15431 1.1049977.620194 2.3264665 1.095538 2.9567113 1.345626 1.7837229 3.312037 3.0099215 5.258346 3.2801109.282014.0390208.562255.0579399.841312.0579399 3.24582 0 6.196028-2.5268914 6.456167-4.3922032.325173-2.3359261-3.066088-3.8932102-6.354476-4.3508175" />
      <path d="m196.860453 81.5989654h-.000592c-.255408-1.8310208-3.514235-2.3530716-6.606337-1.9232518-3.087372.4304111-6.081921 1.8239261-5.831833 3.6590855.201016 1.4272148 2.776979 3.8636489 5.827695 3.8630577.257182 0 .517321-.0171455.779233-.0538014 2.036175-.2820138 3.530199-1.5750208 4.239667-2.3205542 1.081349-1.1351502 1.706273-2.401552 1.592167-3.2245358" />
      <path d="m247.802088 160.025423c-1.133968-3.4291-4.783594-4.532915-10.847779-3.280111-18.005136 3.715843-24.453025 1.141653-26.570789-.417404 13.995455-21.320721 25.50836-47.091585 31.719168-71.1372567 2.942522-11.3899307 4.567797-21.9675197 4.700231-30.5887483.146624-9.4643141-1.464462-16.4176998-4.788914-20.6656443-13.402458-17.125395-33.07189-26.31124253-56.882254-26.56369519-16.368629-.18387067-30.198541 4.00554269-32.879742 5.18326099-5.646189-1.4041571-11.801422-2.2661617-18.501764-2.3761293-12.288591-.19865132-22.909931 2.7432794-31.704388 8.7394734-3.8198986-1.4213025-13.6921572-4.8101986-25.7643605-6.7547344-20.8725727-3.36110856-37.4581801-.8147067-49.294485 7.5706235-14.1231593 10.0058753-20.64317778 27.8915843-19.37973205 53.1593164.42509007 8.5018014 5.26839725 34.6534139 12.91292375 59.6988449 10.0620416 32.963696 20.9990947 51.62509 32.5078615 55.463317 1.3468083.44933 2.900545.763861 4.6127298.763861 4.1982817 0 9.3448868-1.892508 14.700194-8.330346 8.8949653-10.701155 17.1998891-19.66825 20.2612471-22.926485 4.5240462 2.428748 9.4932844 3.784425 14.5772194 3.920406.008868.133026.022466.266051.034291.398485-1.019861 1.209645-1.856443 2.269709-2.56946 3.174873-3.521921 4.470836-4.255039 5.401423-15.5923507 7.736167-3.2245358.665127-11.7907806 2.430521-11.9155288 8.434401-.1365728 6.559631 10.1241201 9.314735 11.2935612 9.606799 4.0741247 1.019862 7.9986697 1.522994 11.7417093 1.522994 9.103667-.000592 17.114161-2.992185 23.516526-8.78086-.197469 23.385866.778051 46.430005 3.585774 53.451381 2.29927 5.747289 7.917672 19.794772 25.664443 19.793589 2.60316 0 5.470005-.302706 8.623003-.978475 18.520683-3.971252 26.563104-12.156749 29.674716-30.203271 1.664886-9.644637 4.522272-32.67636 5.865533-45.029986 2.836102.884471 6.487501 1.28946 10.434513 1.288869 8.232203 0 17.730808-1.748841 23.687981-4.513996 6.691474-3.107473 18.767816-10.734263 16.577922-17.359519zm-44.105903-83.4808318c-.061488 3.647261-.563437 6.9581155-1.095538 10.4144111-.572305 3.7170254-1.164712 7.5599815-1.3137 12.2253303-.147215 4.5400094.419769 9.2603414.968425 13.8245914 1.107954 9.219547 2.244877 18.711649-2.156785 28.07782-.684047-1.214966-1.344444-2.54049-1.949857-4.008499-.546882-1.326116-1.734651-3.456296-3.378845-6.40473-6.399409-11.475658-21.384573-38.3491547-13.713442-49.3151778 2.28449-3.264739 8.083215-6.6199354 22.639742-4.813746zm-17.643899-61.7864573c21.333728.4712056 38.209035 8.4521386 50.157672 23.7199077 9.163973 11.7109653-.927039 64.9979864-30.140009 110.9686094-.288517-.366559-.582355-.736665-.886245-1.116231-.121201-.151944-.244766-.306254-.369515-.462337 7.548749-12.467141 6.072462-24.801847 4.758763-35.738309-.539788-4.487982-1.049423-8.727058-.919945-12.7083606.134208-4.2213395.692323-7.8402217 1.23152-11.3402679.663944-4.3135704 1.338531-8.7761293 1.152295-14.0374319.138938-.551612.195104-1.2037321.122384-1.9776443-.475345-5.0455058-6.235049-20.1435935-17.975576-33.8109192-6.421284-7.474254-15.786863-15.8394827-28.573856-21.4815335 5.500157-1.1398799 13.021709-2.2029007 21.442512-2.0154827zm-119.3781798 161.0198611c-5.8998244 7.093506-9.9745404 5.734282-11.314254 5.287908-8.7306051-2.91237-18.8600462-21.36388-27.7910762-50.624148-7.7278892-25.317986-12.2442494-50.7766834-12.6013487-57.9157134-1.1286467-22.5776628 4.344314-38.3130901 16.2675288-46.768776 19.4039723-13.760739 51.3064203-5.5243972 64.1253395-1.3468083-.1844619.1815057-.3760185.3517783-.5587067.5362402-21.0351593 21.2444526-20.5361663 57.5408776-20.4847298 59.7591501-.0017736.8560924.0697645 2.0681016.1684989 3.7353533.3618291 6.104388 1.0352332 17.4665311-.7638615 30.3339311-1.6725727 11.956914 2.0131178 23.660194 10.110522 32.108785.8383556.87442 1.7133672 1.69563 2.6173487 2.46836-3.6046928 3.860102-11.4378199 12.395603-19.775261 22.425718zm22.4789284-29.993385c-6.5265219-6.809127-9.4903279-16.281127-8.1328776-25.989026 1.900194-13.592831 1.1984111-25.4309096.8218014-31.7907064-.0526189-.8897921-.0993256-1.6696166-.1271131-2.2850808 3.0731824-2.7243603 17.3139953-10.3552887 27.4694507-8.028231 4.635196 1.0618384 7.458291 4.2172009 8.632462 9.6458199 6.0766 28.1026513.804655 39.8159813-3.431465 49.2282683-.873238 1.939214-1.697995 3.772009-2.402734 5.668655l-.5457 1.465645c-1.382282 3.706383-2.668194 7.152037-3.465164 10.424462-6.937422-.021284-13.6868359-2.984499-18.8186604-8.339806zm1.0647945 37.900415c-2.0255335-.506087-3.8476859-1.385237-4.9166189-2.114217.8927482-.42036 2.4819584-.991482 5.2376535-1.559057 13.3374223-2.746236 15.3966563-4.683677 19.8946883-10.394901 1.031686-1.30897 2.200536-2.793534 3.819307-4.601497.000591-.001182.001183-.001773.001774-.002365 2.411603-2.699528 3.514235-2.241921 5.514346-1.412434 1.621136.67104 3.199705 2.702485 3.84 4.938494.302707 1.055927.643252 3.060767-.470023 4.619825-9.396323 13.155917-23.087889 12.986827-32.9211269 10.526152zm69.7987249 64.952462c-16.316009 3.495908-22.092859-4.829117-25.89975-14.346051-2.457127-6.144591-3.664407-33.851122-2.807723-64.447556.011233-.407353-.046707-.800517-.159039-1.170032-.097552-.713608-.247723-1.435492-.455834-2.162107-1.274679-4.451917-4.379196-8.176037-8.103908-9.719723-1.479833-.613099-4.196508-1.738198-7.460656-.90339.696462-2.868028 1.903742-6.106161 3.21212-9.613302l.549248-1.475696c.61842-1.663113 1.393515-3.385939 2.214133-5.209274 4.432998-9.84861 10.504278-23.337386 3.915086-53.8108456-2.46836-11.4135797-10.710023-16.9870485-23.20436-15.6928591-7.4908086.7750947-14.343095 3.7974318-17.7609611 5.5303094-.7348914.3724712-1.4071131.7319354-2.034993 1.0825312.9536443-11.5004896 4.5583371-32.9920739 18.0406101-46.5896351 8.488203-8.5609238 19.793588-12.7887667 33.567926-12.5611455 27.140138.4446005 44.544 14.3726559 54.366004 25.9789746 8.463372 10.0017367 13.046541 20.076194 14.875788 25.5095427-13.754827-1.3982448-23.109765 1.3172472-27.852564 8.096813-10.316859 14.7474919 5.644416 43.3721944 13.315548 57.1287944 1.406522 2.52157 2.620896 4.700231 3.002826 5.626088 2.497922 6.054134 5.731917 10.095741 8.093266 13.04654.723658.903982 1.426032 1.780767 1.959908 2.546402-4.165765 1.201367-11.648887 3.975982-10.967206 17.846688-.549838 6.960481-4.461376 39.546384-6.447889 51.059289-2.62267 15.209829-8.219788 20.875529-23.95758 24.249644zm68.104277-77.936923c-4.259769 1.977644-11.388748 3.461025-18.161219 3.779103-7.480166.350596-11.287649-.837764-12.183353-1.568517-.420952-8.643695 2.79708-9.547085 6.20194-10.503095.535057-.150762 1.057108-.296794 1.560831-.472979.313349.254818.656259.507862 1.031686.755585 6.012157 3.968295 16.735778 4.396341 31.874069 1.271722.055575-.011824.11115-.022466.166134-.033699-2.041496 1.909062-5.53563 4.471427-10.490088 6.77188z" />
    </g>
  </svg>,
  'Postgres',
);
