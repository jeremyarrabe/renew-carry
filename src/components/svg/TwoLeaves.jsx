const TwoLeaves = (props) => {
  const { className, fill } = props;
  const color = fill || "#4A7C59";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={66}
      height={66}
      fill="none"
      viewBox="0 0 105.296 105.296"
      className={className}
    >
      <g fill={color} clipPath="url(#a)">
        <path d="M65.222 15.82c-.492-.199-1.277-.613-2.212-.863-.935-.264-2.199-.702-3.487-.813a28.99 28.99 0 0 0-4.382-.098c-1.57.128-3.164.461-4.874.903-1.707.44-3.27 1.174-4.938 1.977-1.628.83-3.112 1.865-4.599 2.993a36.398 36.398 0 0 0-3.955 3.824c-1.137 1.409-2.266 2.858-3.136 4.404-.897 1.536-1.67 3.117-2.23 4.735-1.198 3.201-1.675 6.496-1.725 9.43.005 1.489.092 2.87.277 4.14.16 1.261.477 2.426.72 3.367.099.442.237.864.374 1.238.24-.504.5-1.035.792-1.617 1.444-2.866 3.55-6.598 6.013-10.093 1.227-1.75 2.573-3.414 3.885-4.919.695-.722 1.367-1.417 2-2.077.683-.612 1.327-1.193 1.916-1.727l1.742-1.308c.498-.413 1.019-.653 1.41-.901l1.25-.74-1.189.835c-.367.28-.86.553-1.323 1.001l-1.613 1.421c-.542.574-1.128 1.19-1.748 1.845-.57.695-1.174 1.428-1.795 2.188a57.8 57.8 0 0 0-3.415 5.112c-2.138 3.596-3.9 7.4-5.087 10.296a78.654 78.654 0 0 0-.855 2.188c.507-.136 1.152-.28 1.848-.536.883-.307 2.022-.623 3.127-1.073a48.178 48.178 0 0 0 3.552-1.525c1.235-.573 2.439-1.246 3.672-1.955 1.231-.705 2.398-1.512 3.557-2.342 1.125-.862 2.243-1.733 3.257-2.698 1.002-.992 2.015-1.922 2.89-2.997a35.72 35.72 0 0 0 4.582-6.594c.65-1.096 1.19-2.372 1.72-3.525.535-1.145.99-2.415 1.444-3.58.457-1.143.88-2.301 1.252-3.43.406-1.161.76-2.174 1.054-3.007.339-.828.55-1.693.742-2.203.176-.575.266-.88.266-.88s-.273-.165-.78-.396ZM25.341 41.582c-1.75-1.227-3.412-2.574-4.917-3.887-.721-.69-1.417-1.364-2.077-1.998-.614-.683-1.19-1.326-1.73-1.916-.479-.637-.915-1.225-1.307-1.742-.413-.498-.65-1.018-.9-1.409-.472-.794-.74-1.25-.74-1.25l.837 1.188c.276.367.55.86 1.001 1.323l1.421 1.614c.573.54 1.19 1.128 1.845 1.746l2.188 1.795c1.58 1.169 3.305 2.353 5.11 3.415.748.446 1.505.839 2.26 1.242A45.045 45.045 0 0 1 30.65 30.04c-.71-.918-1.431-1.823-2.224-2.65-.991-1.005-1.918-2.017-2.996-2.891a35.874 35.874 0 0 0-6.593-4.583c-1.096-.65-2.374-1.19-3.527-1.72-1.142-.535-2.411-.992-3.576-1.443a61.756 61.756 0 0 0-3.431-1.25l-3.008-1.056c-.828-.337-1.695-.551-2.203-.742l-.878-.266s-.17.276-.403.782c-.197.49-.612 1.276-.863 2.212-.262.932-.702 2.196-.81 3.485a28.473 28.473 0 0 0-.098 4.385c.124 1.569.457 3.16.9 4.872.444 1.706 1.175 3.27 1.977 4.94.83 1.624 1.865 3.108 2.996 4.597a36.365 36.365 0 0 0 3.824 3.96c1.406 1.132 2.858 2.262 4.407 3.135 1.532.897 3.114 1.671 4.731 2.229 3.2 1.2 6.495 1.675 9.431 1.727.126 0 .233-.013.352-.017-.314-2.057-.428-4.157-.39-6.266-.974-.612-1.953-1.212-2.927-1.899Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h66v66H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TwoLeaves;
