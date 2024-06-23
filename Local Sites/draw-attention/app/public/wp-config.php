<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '|*LF1Ru4z3ztH<8Yx`N5`(jTa-P@2b1sExVW3NKw&4Qv9jtl!g)]1mk8QP_XJwNg' );
define( 'SECURE_AUTH_KEY',   'smGjkZc~y]a~trn.x#qHCNmfsY{7>[1~C~(A$bz#oR9i!dOw1`>FJ=loFJQzo;d=' );
define( 'LOGGED_IN_KEY',     '@lleGYC!r*DZF|Cy[^}3EjB,``vgo3%,jBdcLfRY&Ezd1<,R.bsc&;FQZ9F8+R;u' );
define( 'NONCE_KEY',         'fldV%sz1!jNqe{}12mR}vv!.T0:VzvJ%<1{4Tz%`CSu%l&yYInFOcU{:EOkL2W-c' );
define( 'AUTH_SALT',         'WFEMQ_0:LSo`f Ieh-/+`1xpqZJAXjImivgp0KS9$TSl kf}!3J,}3CxGZ8#[EO2' );
define( 'SECURE_AUTH_SALT',  'Z&ioQ~n[s<F,i_e{g{LS,Q]/ !1lcCAJQ7_dB|JBskqK]oV=fUVYpeabPK0$(PwR' );
define( 'LOGGED_IN_SALT',    'D_$D:KEqFT.-mv@$%OW&2XkoA^5]hOVRLom,_ZgZE,qakI[hw0HgITrVf/!t8E}m' );
define( 'NONCE_SALT',        'Yhx#/kre?9{Qo[tpUT-kGW-(,i6Ld!EGqUfUrze1?O8~c&OXy+:Is;z3`{Yp`SXG' );
define( 'WP_CACHE_KEY_SALT', 'F6!RIX<40a.mCOa-M.u7`ld d:9_@2Y.5AM6^lk:nNnyxh1guB^:kg;:ZB$P|_f(' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
