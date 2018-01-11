import React, {Component} from 'react';
import {connect} from 'react-redux';
import {contentUpdate, queryUpdate} from '../actions/index';
import {bindActionCreators} from 'redux';

export const apache_log = `
** Normal (v2.x)
[Sat Aug 12 04:05:51 2006] [notice] Apache/1.3.11 (Unix) mod_perl/1.21 configured -- resuming normal operations
[Thu Jun 22 14:20:55 2006] [notice] Digest: generating secret for digest authentication ...
[Thu Jun 22 14:20:55 2006] [notice] Digest: done
[Thu Jun 22 14:20:55 2006] [notice] Apache/2.0.46 (Red Hat) DAV/2 configured -- resuming normal operations

** Restart by HUP signal (optional suEXEC)
[Sat Aug 12 04:05:49 2006] [notice] SIGHUP received.  Attempting to restart
[Sat Aug 12 04:05:51 2006] [notice] suEXEC mechanism enabled (wrapper: /usr/local/apache/sbin/suexec)

** after 'unclean' shutdown (left over PID file)
[Sat Jun 24 09:06:22 2006] [warn] pid file /opt/CA/BrightStorARCserve/httpd/logs/httpd.pid overwritten -- Unclean shutdown of previous Apache run?
[Sat Jun 24 09:06:23 2006] [notice] Apache/2.0.46 (Red Hat) DAV/2 configured -- resuming normal operations
[Sat Jun 24 09:06:22 2006] [notice] Digest: generating secret for digest authentication ...
[Sat Jun 24 09:06:22 2006] [notice] Digest: done
`;

export const apache_log2 = `
64.242.88.10 - - [07/Mar/2004:16:05:49 -0800] "GET /twiki/bin/edit/Main/Double_bounce_sender?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12846
64.242.88.10 - - [07/Mar/2004:16:06:51 -0800] "GET /twiki/bin/rdiff/TWiki/NewUserTemplate?rev1=1.3&rev2=1.2 HTTP/1.1" 200 4523
64.242.88.10 - - [07/Mar/2004:16:10:02 -0800] "GET /mailman/listinfo/hsdivision HTTP/1.1" 200 6291
64.242.88.10 - - [07/Mar/2004:16:11:58 -0800] "GET /twiki/bin/view/TWiki/WikiSyntax HTTP/1.1" 200 7352
64.242.88.10 - - [07/Mar/2004:16:20:55 -0800] "GET /twiki/bin/view/Main/DCCAndPostFix HTTP/1.1" 200 5253
64.242.88.10 - - [07/Mar/2004:16:23:12 -0800] "GET /twiki/bin/oops/TWiki/AppendixFileSystem?template=oopsmore¶m1=1.12¶m2=1.12 HTTP/1.1" 200 11382
64.242.88.10 - - [07/Mar/2004:16:24:16 -0800] "GET /twiki/bin/view/Main/PeterThoeny HTTP/1.1" 200 4924
64.242.88.10 - - [07/Mar/2004:16:29:16 -0800] "GET /twiki/bin/edit/Main/Header_checks?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851
64.242.88.10 - - [07/Mar/2004:16:30:29 -0800] "GET /twiki/bin/attach/Main/OfficeLocations HTTP/1.1" 401 12851
64.242.88.10 - - [07/Mar/2004:16:31:48 -0800] "GET /twiki/bin/view/TWiki/WebTopicEditTemplate HTTP/1.1" 200 3732
64.242.88.10 - - [07/Mar/2004:16:32:50 -0800] "GET /twiki/bin/view/Main/WebChanges HTTP/1.1" 200 40520
64.242.88.10 - - [07/Mar/2004:16:33:53 -0800] "GET /twiki/bin/edit/Main/Smtpd_etrn_restrictions?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851
64.242.88.10 - - [07/Mar/2004:16:35:19 -0800] "GET /mailman/listinfo/business HTTP/1.1" 200 6379
64.242.88.10 - - [07/Mar/2004:16:36:22 -0800] "GET /twiki/bin/rdiff/Main/WebIndex?rev1=1.2&rev2=1.1 HTTP/1.1" 200 46373
64.242.88.10 - - [07/Mar/2004:16:37:27 -0800] "GET /twiki/bin/view/TWiki/DontNotify HTTP/1.1" 200 4140
64.242.88.10 - - [07/Mar/2004:16:39:24 -0800] "GET /twiki/bin/view/Main/TokyoOffice HTTP/1.1" 200 3853
64.242.88.10 - - [07/Mar/2004:16:43:54 -0800] "GET /twiki/bin/view/Main/MikeMannix HTTP/1.1" 200 3686
64.242.88.10 - - [07/Mar/2004:16:45:56 -0800] "GET /twiki/bin/attach/Main/PostfixCommands HTTP/1.1" 401 12846
64.242.88.10 - - [07/Mar/2004:16:47:12 -0800] "GET /robots.txt HTTP/1.1" 200 68
64.242.88.10 - - [07/Mar/2004:16:47:46 -0800] "GET /twiki/bin/rdiff/Know/ReadmeFirst?rev1=1.5&rev2=1.4 HTTP/1.1" 200 5724
64.242.88.10 - - [07/Mar/2004:16:49:04 -0800] "GET /twiki/bin/view/Main/TWikiGroups?rev=1.2 HTTP/1.1" 200 5162
64.242.88.10 - - [07/Mar/2004:16:50:54 -0800] "GET /twiki/bin/rdiff/Main/ConfigurationVariables HTTP/1.1" 200 59679
64.242.88.10 - - [07/Mar/2004:16:52:35 -0800] "GET /twiki/bin/edit/Main/Flush_service_name?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851
64.242.88.10 - - [07/Mar/2004:16:53:46 -0800] "GET /twiki/bin/rdiff/TWiki/TWikiRegistration HTTP/1.1" 200 34395
64.242.88.10 - - [07/Mar/2004:16:54:55 -0800] "GET /twiki/bin/rdiff/Main/NicholasLee HTTP/1.1" 200 7235
64.242.88.10 - - [07/Mar/2004:16:56:39 -0800] "GET /twiki/bin/view/Sandbox/WebHome?rev=1.6 HTTP/1.1" 200 8545
64.242.88.10 - - [07/Mar/2004:16:58:54 -0800] "GET /mailman/listinfo/administration HTTP/1.1" 200 6459
lordgun.org - - [07/Mar/2004:17:01:53 -0800] "GET /razor.html HTTP/1.1" 200 2869
64.242.88.10 - - [07/Mar/2004:17:09:01 -0800] "GET /twiki/bin/search/Main/SearchResult?scope=text®ex=on&search=Joris%20*Benschop[^A-Za-z] HTTP/1.1" 200 4284
64.242.88.10 - - [07/Mar/2004:17:10:20 -0800] "GET /twiki/bin/oops/TWiki/TextFormattingRules?template=oopsmore¶m1=1.37¶m2=1.37 HTTP/1.1" 200 11400
64.242.88.10 - - [07/Mar/2004:17:13:50 -0800] "GET /twiki/bin/edit/TWiki/DefaultPlugin?t=1078688936 HTTP/1.1" 401 12846
64.242.88.10 - - [07/Mar/2004:17:16:00 -0800] "GET /twiki/bin/search/Main/?scope=topic®ex=on&search=^g HTTP/1.1" 200 3675
64.242.88.10 - - [07/Mar/2004:17:17:27 -0800] "GET /twiki/bin/search/TWiki/?scope=topic®ex=on&search=^d HTTP/1.1" 200 5773
lj1036.inktomisearch.com - - [07/Mar/2004:17:18:36 -0800] "GET /robots.txt HTTP/1.0" 200 68
lj1090.inktomisearch.com - - [07/Mar/2004:17:18:41 -0800] "GET /twiki/bin/view/Main/LondonOffice HTTP/1.0" 200 3860
64.242.88.10 - - [07/Mar/2004:17:21:44 -0800] "GET /twiki/bin/attach/TWiki/TablePlugin HTTP/1.1" 401 12846
64.242.88.10 - - [07/Mar/2004:17:22:49 -0800] "GET /twiki/bin/view/TWiki/ManagingWebs?rev=1.22 HTTP/1.1" 200 9310
64.242.88.10 - - [07/Mar/2004:17:23:54 -0800] "GET /twiki/bin/statistics/Main HTTP/1.1" 200 808
64.242.88.10 - - [07/Mar/2004:17:26:30 -0800] "GET /twiki/bin/view/TWiki/WikiCulture HTTP/1.1" 200 5935
64.242.88.10 - - [07/Mar/2004:17:27:37 -0800] "GET /twiki/bin/edit/Main/WebSearch?t=1078669682 HTTP/1.1" 401 12846
64.242.88.10 - - [07/Mar/2004:17:28:45 -0800] "GET /twiki/bin/oops/TWiki/ResetPassword?template=oopsmore¶m1=1.4¶m2=1.4 HTTP/1.1" 200 11281
64.242.88.10 - - [07/Mar/2004:17:29:59 -0800] "GET /twiki/bin/view/TWiki/ManagingWebs?skin=print HTTP/1.1" 200 8806
64.242.88.10 - - [07/Mar/2004:17:31:39 -0800] "GET /twiki/bin/edit/Main/UvscanAndPostFix?topicparent=Main.WebHome HTTP/1.1" 401 12846
64.242.88.10 - - [07/Mar/2004:17:35:35 -0800] "GET /twiki/bin/view/TWiki/KlausWriessnegger HTTP/1.1" 200 3848
64.242.88.10 - - [07/Mar/2004:17:39:39 -0800] "GET /twiki/bin/view/Main/SpamAssassin HTTP/1.1" 200 4081
64.242.88.10 - - [07/Mar/2004:17:42:15 -0800] "GET /twiki/bin/oops/TWiki/RichardDonkin?template=oopsmore¶m1=1.2¶m2=1.2 HTTP/1.1" 200 11281
64.242.88.10 - - [07/Mar/2004:17:46:17 -0800] "GET /twiki/bin/rdiff/TWiki/AlWilliams?rev1=1.3&rev2=1.2 HTTP/1.1" 200 4485
64.242.88.10 - - [07/Mar/2004:17:47:43 -0800] "GET /twiki/bin/rdiff/TWiki/AlWilliams?rev1=1.2&rev2=1.1 HTTP/1.1" 200 5234
64.242.88.10 - - [07/Mar/2004:17:50:44 -0800] "GET /twiki/bin/view/TWiki/SvenDowideit HTTP/1.1" 200 3616
64.242.88.10 - - [07/Mar/2004:17:53:45 -0800] "GET /twiki/bin/search/Main/SearchResult?scope=text®ex=on&search=Office%20*Locations[^A-Za-z] HTTP/1.1" 200 7771













[Sun Mar 7 16:02:00 2004] [notice] Apache/1.3.29 (Unix) configured -- resuming normal operations
[Sun Mar 7 16:02:00 2004] [info] Server built: Feb 27 2004 13:56:37
[Sun Mar 7 16:02:00 2004] [notice] Accept mutex: sysvsem (Default: sysvsem)
[Sun Mar 7 16:05:49 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 16:45:56 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 17:13:50 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 17:21:44 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 17:23:53 2004] statistics: Use of uninitialized value in concatenation (.) or string at /home/httpd/twiki/lib/TWiki.pm line 528.
[Sun Mar 7 17:23:53 2004] statistics: Can't create file /home/httpd/twiki/data/Main/WebStatistics.txt - Permission denied
[Sun Mar 7 17:27:37 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 17:31:39 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 17:58:00 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 18:00:09 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 18:10:09 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 18:19:01 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 18:42:29 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 18:52:30 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 18:58:52 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 19:03:58 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 19:08:55 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 19:22:11 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 19:31:25 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 19:39:40 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 19:41:33 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 19:42:45 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 20:02:13 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 20:04:35 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 20:11:33 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 20:12:55 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 20:25:31 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 20:44:48 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 20:58:27 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 21:16:17 2004] [error] [client 24.70.56.49] File does not exist: /home/httpd/twiki/view/Main/WebHome
[Sun Mar 7 21:20:14 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 21:31:12 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 21:39:55 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 21:44:10 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 22:06:16 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 22:08:43 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 22:09:44 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 22:12:28 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 22:27:18 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 22:45:46 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 23:30:23 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Sun Mar 7 23:42:44 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 00:11:22 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 00:32:45 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 00:40:10 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 01:04:05 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 01:19:18 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 01:35:13 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 01:47:06 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 01:59:13 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 02:12:24 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 02:54:54 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 03:46:27 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 03:48:18 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 03:52:17 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 03:55:09 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 04:22:55 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 04:24:47 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 04:40:32 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 04:55:40 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 04:59:13 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 05:22:57 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 05:24:29 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed
[Mon Mar 8 05:31:47 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed








<11>httpd[31628]: [error] [client 192.168.92.91] File does not exist: /usr/local/installed/apache/htdocs/squirrelmail/_vti_inf.html in 29-Mar 15:18:20.50 from 192.168.92.1
<11>httpd[25859]: [error] [client 192.168.92.91] File does not exist: /usr/local/installed/apache/htdocs/squirrelmail/_vti_bin/shtml.exe/_vti_rpc in 29-Mar 15:18:20.54 from 192.168.92.1
`;

class SampleButtons extends Component {
    // when it's clicked, it has to clear the query bar
    // and it has to reset the content

    constructor(props) {
        super(props);
        this.updateAndClear = this.updateAndClear.bind(this);
    }

    updateAndClear(content) {
        // clear query; does keep whatever's in the query bar
        this.props.queryUpdate('');
        // update content
        this.props.contentUpdate(content);
    }

    render() {
        return (
            <div>
            <button className="btn" onClick={() => this.updateAndClear(apache_log)}>
            Apache Log 1
            </button>

            <button className="btn" onClick={() => this.updateAndClear(apache_log2)}>
            Apache Log 2
            </button>
            </div>
        );
    }
}

// wire it up; we only have dispatch here
function mapDispatchToProps(dispatch) {
    return bindActionCreators({contentUpdate: contentUpdate,
                                    queryUpdate: queryUpdate}, dispatch);
}

export default connect(null, mapDispatchToProps)(SampleButtons);
