Useragnt.pc =
    !m("iphone")
    && !m("ipod")
    && !m("ipad")
    && !m("android")
    && (!m("windows")
        || ( !m("phone")
            &&
            ( !m("touch") || m("tablet pc") )
        )
    )
    && (!m("firefox")
        || ( !m("mobile") && !m("tablet") )
    )
    && !m("blackberry")
    && !m("kindle")
    && !m("silk")
    && !m("playbook");