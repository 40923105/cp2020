var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'website', 'text': 'Github: https://github.com/40923105/cp2020/ \n', 'tags': '', 'url': 'website.html'}, {'title': 'H1', 'text': '有關作業一: \n 電腦能做什麼? 在充分了解與電腦硬體及軟體相關英文術語的涵義與功能之後, 就能體會現代人的知識學習已經離不開電腦與網路, 因為它們已經無所不在. \n 電腦與網路結合下的科技社會, 工程師扮演著透過創新設計建立新產品與服務的重要角色, 學會如何編寫程式與電腦溝通, 並透過網路通訊進行協同設計應該是工程師必備的專業技能. \n 各組員進行作業一之前, 必須先檢查是否已經有一個 USB 3.0 規格以上 64 GB 的隨身碟, 是否已經學會如何利用 \xa0 CMSiMDE \xa0 管理自己的網站內容, 各組是否已經學會使用 meet 與 Youtube + OBS 進行每週的分組線上會議? \n 作業一 (Due. 各班第八週上課之前)： \n 請各組員至 \xa0 https://oli.cmu.edu/product-category/computer-science-programming-indep/ \xa0 以 @gm 電子郵箱登記帳號後, 分別閱讀 PC Hardware Unit 1-5\xa0與 https://oli.cmu.edu/product-category/computer-science-programming-indep/ \xa0 教材內容, 各組員將所分配到的章節內容以英文及中文對照的方式, 配合電腦輔助設計室中的電腦與網路配置或操作心得, 將圖文與參考資料放入個人 cp2020 網頁, 之後再設法整合至各組分組網頁中 (由組長負責建立 cp2020ag1, a 為甲班, b 為乙班, g1 代表第一組). \n', 'tags': '', 'url': 'H1.html'}, {'title': 'PCH 1 - External Components of the Desktop System Unit (台式機系統單元的外部組件) P.13', 'text': 'The lab activity below is designed to help you locate and understand the purpose of the various bays and ports on a desktop PC system unit. To identify components, move your mouse pointer over the name of the component or the image. Then be sure to click on each component to see a detailed view. In the detailed view, you will be able to examine the cables of various peripherals. You also will be able to see the most common bays and the way peripherals fit into them. \n 下面的實驗活動旨在幫助您查找和了解台式PC系統單元上各種托架和端口的用途。要識別組件，請將鼠標指針移到組件或圖像的名稱上。然後，請確保單擊每個組件以查看詳細視圖。在詳細視圖中，您將能夠檢查各種外圍設備的電纜。您還將能夠看到最常見的托架以及外圍設備裝入它們的方式。 \n \n A:Power button (電源按鈕) B:Memory card reader bay (存儲卡讀取器托架) C:CD/DVD drive (CD / DVD驅動器) \n \n D:USB ports (USB端口) E:Microphone jack (input) (麥克風插孔（輸入）) F: Headphone jack (output) (耳機插孔（輸出）) \n \n G: FireWire 400 port (FireWire 400端口) \n', 'tags': '', 'url': 'PCH 1 - External Components of the Desktop System Unit (台式機系統單元的外部組件) P.13.html'}, {'title': 'PCH 1 - Connections Between Common Peripherals and Standard Ports(通用外圍設備和標準端口之間的連接) P.14', 'text': 'The peripherals connect to the computer via standard ports. Ports allow for information to flow into or out of the computer as part of the input and output subsystems. External devices, such as keyboards, mice, printers, scanners, storage devices, monitors, and others can connect to the computer through various types of cables, which connect to specific ports. On most modern systems, this has been reduced down to a common, standard interface, the universal serial bus port (USB port). Older systems have various ports for various functions, which are now referred to as legacy ports, such as PS/2, serial, and parallel ports. They were difficult to configure and required hardware resources to be dedicated to them, such as interrupt requests, direct memory access, and specific I/O (input/output) port addresses. In USB, this is all handled by the operating system automatically. This makes hardware conflicts rare in current systems. Many customers will still have computers with legacy ports. So, it is important to understand multiple ports and connections. \n 外圍設備通過標準端口連接到計算機。端口允許信息作為輸入和輸出子系統的一部分流入或流出計算機。外部設備（例如鍵盤，鼠標，打印機，掃描儀，存儲設備，監視器和其他設備）可以通過連接到特定端口的各種類型的電纜連接到計算機。在大多數現代系統上，這已簡化為通用的標準接口，即通用串行總線端口（USB端口）。較舊的系統具有用於各種功能的各種端口，這些端口現在稱為傳統端口，例如PS / 2，串行和並行端口。它們很難配置，並且需要專用於它們的硬件資源，例如中斷請求，直接內存訪問和特定的I / O（輸入/輸出）端口地址。在USB中，這全部由操作系統自動處理。這使得在當前系統中很少發生硬件衝突。許多客戶仍將擁有帶有舊端口的計算機。因此，了解多個端口和連接很重要。 \n \n The photo below offers a close-up view of a motherboard’s port cluster. \n 下圖提供了主板端口集群的特寫視圖。 \n \n \n The chart below describes the functions of the ports depicted in the image above. \n 下表描述了上圖中描繪的端口的功能。 \n \n \n \n \n PORT (接口) \n \n \n NAME (名稱) \n \n \n FUNCTION (功能) \n \n \n \n \n A \n \n \n PS/2 \n \n \n Used to connect keyboards and mice. (用於連接鍵盤和鼠標。) \n \n \n \n \n B \n \n \n USB \n \n \n Used to connect external devices with a \xa0 universal serial bus \xa0 (USB) connector, such as mice, keyboards, printers, and storage devices. ( 用於通過 通用串行總線( USB)連接器 連接外部設備 ，例如鼠標，鍵盤，打印機和存儲設備。 ) \n \n \n \n \n C \n \n \n S/PDIF Optical (S/PDIF光學) \n \n \n Used to connect digital high-fidelity audio systems. (用於連接數字高保真音頻系統。) \n \n \n \n \n D \n \n \n HDMI ( HDMI接口 ) \n \n \n Used to connect a \xa0 high-definition multimedia interface \xa0 (HDMI). ( 用於連接 高清多媒體接口( HDMI)。 ) \n \n \n \n \n E \n \n \n VGA (顯卡) \n \n \n Used to connect a\xa0 video graphics array\xa0 (VGA) display device. (用於連接視頻圖形陣列(VGA)顯示設備。) \n \n \n \n \n F \n \n \n DVI \n \n \n Used to connect a \xa0 digital video interface \xa0 (DVI) display device. ( 用於連接 數字視頻接口( DVI)顯示設備。 ) \n \n \n \n \n G \n \n \n USB \n \n \n Used to connect external devices with a\xa0universal serial bus\xa0(USB) connector, such as mice, keyboards, printers, and storage devices. (用於通過通用串行總線(USB)連接器連接外部設備，例如鼠標，鍵盤，打印機和存儲設備。) \n \n \n \n \n H \n \n \n IEEE 1394 \n \n \n Used to connect external FireWire devices, such as hard drives and cameras. ( 用於連接外部FireWire設備，例如硬盤驅動器和相機。 ) \n \n \n \n \n I \n \n \n RJ-45 \n \n \n Used to connect to an Ethernet network. (用於連接到以太網。) \n \n \n \n \n J \n \n \n USB \n \n \n Used to connect external devices with a \xa0 universal serial bus \xa0 (USB) connector, such as mice, keyboards, printers, and storage devices. ( 用於通過 通用串行總線 (USB)連接器 連接外部設備 ，例如鼠標，鍵盤，打印機和存儲設備。 ) \n \n \n \n \n K \n \n \n Audio (音訊) \n \n \n Used to connect to a speaker system. (用於連接揚聲器系統。) \n \n \n \n \n The photo below shows various types of connectors. \n 下圖顯示了各種類型的連接器。 \n \n \n \n \n CONNECTOR (連接器) \n NAME (名稱) \n FUNCTION (功能) \n \n \n A \n DB-9 serial (DB-9序列) \n Used for serial devices such as a mouse or external modem. (用於串行設備，例如鼠標或外部調製解調器。) \n \n \n B \n DB-25 parallel ( DB-25 並行 ) \n Used to connect printers. ( 用於連接打印機。 ) \n \n \n C \n DB-15(two rows of pin receptacles (兩排引腳插座)) \n Used to connect joysticks or\xa0musical instrument digital interface \xa0 (MIDI) devices. (用於連接操縱桿或樂器數字接口(MIDI)設備。) \n \n \n D \n High-density\xa0 (高密度)  DB-15 (three rows of pins(三排針)) \n Used to connect a\xa0video graphics array\xa0(VGA) and \xa0 super VGA \xa0 (SVGA) display device. ( 用於連接 視頻圖形陣列( VGA)和 超級VGA( SVGA)顯示設備。 ) \n \n \n E \n DVI video (視頻) \n Used to connect a\xa0digital video interface (DVI)\xa0display monitor. (用於連接數字視頻接口(DVI）顯示監視器。) \n \n \n F \n 6-pin mini-DIN (6 針mini-DIN ) \n Used for PS/2 keyboards and mice. By convention, purple connectors are used for keyboards and green connectors are used for mice. ( 用於PS / 2鍵盤和鼠標。 按照慣例，紫色連接器用於鍵盤，綠色連接器用於鼠標。 ) \n \n \n G \n RJ-11(four wires inside plug interface (插頭接口內有四線)) \n Used for internal modem or telephone. (用於內部調製解調器或電話。) \n \n \n H \n RJ-45 (eight wires inside jack interface(插孔接口內有八根電線)) \n Used to connect to an Ethernet network. ( 用於連接到以太網。 ) \n \n \n I \n USB type A (USB A型) \n Used for external\xa0 universal serial bus \xa0(USB) devices such as printers and storage devices. (用於外部通用串行總線(USB)設備，例如打印機和存儲設備。) \n \n \n J \n HDMI ( HDMI接口 ) \n Used to connect a \xa0 high definition multimedia interface (HDMI) \xa0 display monitor. ( 用於連接 高清多媒體接口(HDMI) 顯示監視器。 ) \n \n \n K \n Mini Stereo (迷你立體聲) \n Also known as "1/8 inch" or "3.5 mm" connectors, these are used to connect audio devices such as headphones and speakers. (也稱為“ 1/8英寸”或“ 3.5毫米”連接器，這些連接器用於連接音頻設備，例如耳機和揚聲器。) \n \n \n \n', 'tags': '', 'url': 'PCH 1 - Connections Between Common Peripherals and Standard Ports(通用外圍設備和標準端口之間的連接) P.14.html'}, {'title': 'PCH 1 -USB AND PS 2 (USB和PS 2) P.15', 'text': 'USB \n The \xa0 universal serial bus (USB) \xa0 has replaced many of the external input and output ports on modern computers. In fact, USB can connect virtually any device to a computer, in modern devices. \n 該 通用串行總線（USB） 已經取代了許多關於現代計算機外部輸入和輸出端口。實際上，在現代設備中，USB幾乎可以將任何設備連接到計算機。 \n \n Things such as mice and keyboards, which used to use PS/2 or serial ports, now use USB. Things like printers and scanners, which once used parallel or SCSI ports, now use USB as well. Small computer system interface (SCSI) is a set of parallel interface standards developed by the American National Standards Institute (ANSI) for attaching printers, disk drives, scanners and other peripherals to computers. SCSI (pronounced "skuzzy") is supported by all major operating systems. USB began with version 1.1, which provided two speeds of operations: low-speed (1.5 Mbps for input devices such as mice/keyboards) and full-speed (12 Mbps for other devices, such as webcams, digital cameras, scanners, and printers). USB 2.0 further increased speed to what is known as high-speed or hi-speed (480 Mbps), allowing for USB to provide faster access to external storage devices such as hard drives, helping to replace SCSI and FireWire ports. USB 3.0, the current version, is known as superspeed, because it provides up to 5 Gbps of bandwidth for very fast access to external devices and can be identified by the blue color. Newer versions of USB are backward compatible with older versions, but you should not connect different versions of USB on the same port, as this slows the port down to the lowest version. For example, if you plug in a four-port USB hub to a USB 3.0 port, but then connect a USB 1.1 mouse to the hub, the entire four-port hub will now run at a maximum speed of 12 Mbps (USB 1.1 speeds). Each USB port can be daisy-chained to provide up to 127 devices per port, using USB hubs. \n 鼠標和鍵盤等以前使用PS / 2或串行端口的設備現在使用USB。 曾經使用並行或SCSI端口的打印機和掃描儀之類的東西現在也使用USB。 小型計算機系統接口（SCSI）是由美國國家標準協會（ANSI）開發的一組並行接口標準，用於將打印機，磁盤驅動器，掃描儀和其他外圍設備連接到計算機。 所有主要操作系統都支持SCSI（讀作“ skuzzy”）。 USB從版本1.1開始，提供兩種運行速度：低速（對於鼠標/鍵盤等輸入設備為1.5 Mbps）和全速（對於網絡攝像頭，數碼相機，掃描儀和打印機等其他設備為12 Mbps） ）。 USB 2.0將速度進一步提高到所謂的高速或高速（480 Mbps）， 允許USB提供對硬盤驅動器等外部存儲設備的更快訪問，有助於替換SCSI和FireWire端口。 當前版本的USB 3.0被稱為超速，因為它提供高達5 Gbps的帶寬，可以非常快速地訪問外部設備，並且可以通過藍色識別。 較新版本的USB向後兼容較舊版本的USB，但是您不應在同一端口上連接不同版本的USB，因為這會將端口速度降低到最低版本。 例如，如果將四端口USB集線器插入USB 3.0端口，然後將USB 1.1鼠標連接到集線器，則整個四端口集線器現在將以12 Mbps的最大速度運行（USB 1.1速度）。 每個USB端口都可以使用USB集線器進行菊花鏈連接，以每個端口提供多達127個設備。 \n USB cables should be kept under three meters (approximately nine feet) in length for USB 1.1 and 3.0. For the USB 2.0 variant, you can use cables up to five meters (approximately 15 feet) without issues. If you use cables longer than the recommended length, you may get errors in your input/output over USB, so it is best to keep the USB cables short. If you need a longer cable run, you must use a hub as a repeater to help boost the power signal over the USB cable. There are two types of hubs: self-powered and bus-powered. Self-powered hubs have their own power adapter and connect to the wall outlet to provide power to the hub. Bus-powered are instead powered solely from the source USB port that they are connected to on the computer. This provides minimal amperage for the devices connected to the USB hub that can cause issues when connecting multiple hubs to each other. For connection of multiple hubs, it is best practice to use self-powered hubs. Each USB port can support up to 127 different devices in the chain, with the root hub for the computer having two ports directly connected to the motherboard. If you need more USB ports, you can do this by adding hubs (self-powered or bus-powered), using motherboard USB header cables, or adding expansion cards that contain more USB ports. \n 對於USB 1.1和3.0，USB電纜的長度應保持在三米（約9英尺）以下。 對於USB 2.0型號，可以使用最長5米（約15英尺）的電纜而不會出現問題。 如果使用的電纜長度超過建議的長度，則通過USB的輸入/輸出可能會出現錯誤，因此最好使USB電纜的長度短。 如果需要更長的電纜線，則必須使用集線器作為中繼器，以幫助增強USB電纜上的電源信號。 集線器有兩種類型：自供電和總線供電。 自供電的集線器具有自己的電源適配器，並連接至壁裝電源插座，以為集線器供電。 總線供電只能由它們在計算機上連接的源USB端口供電。 這為連接到USB集線器的設備提供了最小的電流強度，這在將多個集線器相互連接時會引起問題。 對於連接多個集線器，最佳做法是使用自供電集線器。 每個USB端口可在鏈中最多支持127個不同的設備，計算機的根集線器具有兩個直接連接至主板的端口。 如果需要更多USB端口，可以通過添加集線器（自供電或總線供電），使用主板USB接頭連接器電纜或添加包含更多USB端口的擴展卡來實現。 計算機的根集線器有兩個直接連接到主板的端口。 如果需要更多USB端口，可以通過添加集線器（自供電或總線供電），使用主板USB接頭連接器電纜或添加包含更多USB端口的擴展卡來實現。 計算機的根集線器有兩個直接連接到主板的端口。 如果需要更多USB端口，可以通過添加集線器（自供電或總線供電），使用主板USB接頭連接器電纜或添加包含更多USB端口的擴展卡來實現。 \n \n PS/2 \n PS/2 ports, also known as mini-DIN ports, were commonly used for keyboards and mice until the past decade. Recently, these ports have been replaced by USB in most machines. These ports, though, are color-coded for the device which they are intended to be used with. The keyboard port is colored purple, and the mouse port is colored green. Even though these ports look identical, they are not interchangeable. If you plug a mouse into the keyboard port, it simply won’t work. Additionally, unlike USB, these ports are not hot-swappable. Instead, you must restart the machine after plugging the device in for the computer to recognize the new mouse or keyboard. \n PS / 2端口，也稱為mini-DIN端口，在過去十年中一直廣泛用於鍵盤和鼠標。 最近，在大多數機器中，這些端口已被USB取代。 但是，這些端口已針對要使用的設備進行了顏色編碼。 鍵盤端口為紫色，鼠標端口為綠色。 即使這些端口看起來相同，也不能互換。 如果將鼠標插入鍵盤端口，則根本無法使用。 此外，與USB不同，這些端口不可熱插拔。 而是必須在插入設備後重新啟動機器，計算機才能識別新的鼠標或鍵盤。 \n \n \n \n', 'tags': '', 'url': 'PCH 1 -USB AND PS 2 (USB和PS 2) P.15.html'}, {'title': 'PCH 1 - SCSI and FireWire (SCSI和FireWire) P.16', 'text': 'FireWire \n FireWire was originally developed and made popular by Apple as a challenger to USB and a replacement for SCSI. FireWire is a high-speed, bidirectional, serial transmission port used to connect PCs to each other, or devices to PCs. It was introduced during the days of USB 1.1 as a faster alternative, since USB 1.1 had a maximum speed of 12 Mbps and FireWire has a maximum speed of 400 Mbps under IEEE 1394a (FireWire 400) and 800 Mbps under IEEE 1394b (Firewire 800). Common uses for FireWire were to connect to external storage devices and digital media devices, such as video cameras. Most FireWire devices have two FireWire ports to allow for daisy-chaining of the devices, which supports up to 16 devices per FireWire port without any degradation. FireWire remains popular with Mac OS X, but has lost much of its popularity with the introduction of USB 3.0, since the speed is much quicker with USB 3.0. \n FireWire最初是由Apple開發並流行為USB的挑戰者和SCSI的替代品。 FireWire是一個高速雙向串行傳輸端口，用於將PC彼此連接，或將設備連接至PC。 由於USB 1.1的最高速度為12 Mbps，而FireWire在IEEE 1394a（FireWire 400）下為400 Mbps，在IEEE 1394b（Firewire 800）下為800 Mbps，因此它是USB 1.1的最快替代產品。 。 FireWire的常見用途是連接到外部存儲設備和數字媒體設備，例如攝像機。 大多數FireWire設備具有兩個FireWire端口，以實現設備的菊花鏈連接，每個FireWire端口最多支持16個設備，而不會發生任何性能下降。 FireWire在Mac OS X上仍然很流行。 \n \n SCSI \n SCSI stands for small computer systems interface, and is a legacy type of connector. It is used to connect hard disk drives, tape drives, ZIP drives, JAZ drives, scanners, optical drives (CD/DVD), and printers to a computer both internally and externally. SCSI is found mainly in servers for hard disk drives and tape drives, but was sometimes found in older workstations in the 1990s. SCSI supports daisy-chaining and was the precursor to FireWire. SCSI can be narrow (supporting up to seven devices on a single port) or wide (supporting up to 15 devices on a single port). SCSI also requires that a unique ID be assigned to each device in the chain, so the computer knows which device is which. This is accomplished using either a \xa0 DIP switchor jumper that assigns a unique ID of 0-15 (for wide), or 0-7 (for narrow). Finally, each chain must have a termination plug to signify the end of the SCSI chain. SCSI chains can contain many devices of mixed speeds, but this causes the whole “chain” to default to the slowest device. Speed for SCSI ranges from 10 Mbps to 320 Mbps. Since the advent of FireWire, SCSI has lost popularity as an external port for storage devices. Internally, SCSI has been replaced by the SATA[KK1] connector, which we will discuss in the section on storage later in the course. \n SCSI代表小型計算機系統接口，並且是舊版連接器。它用於將硬盤驅動器，磁帶驅動器，ZIP驅動器，JAZ驅動器，掃描儀，光盤驅動器（CD / DVD）和打印機內部和外部連接到計算機。SCSI主要在用於硬盤驅動器和磁帶驅動器的服務器中找到，但有時在1990年代在較舊的工作站中發現。SCSI支持菊花鏈，並且是FireWire的前身。SCSI可以很窄（在單個端口上最多支持七個設備）或很寬（在單個端口上最多支持15個設備）。SCSI還要求將唯一的ID分配給鏈中的每個設備，以便計算機知道哪個設備是哪個設備。使用 DIP開關即可完成此\xa0 操作 \xa0 或為唯一ID分配0-15（寬）或0-7（窄）的跳線。 最後，每個鏈必須有一個端接插頭以表示SCSI鏈的末端。 SCSI鏈可能包含許多速度混合的設備，但這會導致整個“鏈”默認為最慢的設備。 SCSI的速度範圍從10 Mbps到320 Mbps。 自FireWire出現以來，SCSI作為存儲設備的外部端口已不再流行。 在內部，SCSI已由SATA [KK1]連接器取代，我們將在本課程稍後的存儲部分中討論該連接器。 \n \n', 'tags': '', 'url': 'PCH 1 - SCSI and FireWire (SCSI和FireWire) P.16.html'}, {'title': 'PCH 1 -\xa0Serial and Parallel Ports (串行和並行端口) P.17', 'text': 'Serial ports (串口) \n Serial ports, also known as COM or RS-232 ports, were used heavily in the 1980s and 1990s for serial communication as input/output ports. They were often used for external modems, mice, trackballs, touchpads, plotters, label printers, dot-matrix printers, PDA (Palm Pilot) docking stations, digital cameras, and PC-to-PC connections. USB has replaced serial ports for all of these uses in modern computers, but some people still have a need for a serial port. If your computer doesn’t have a serial port (which is very common in modern machines), you can add one using an expansion card or a USB to serial adapter. Serial ports come in two varieties: DB-25 (containing 25 pins) and DB-9 (containing nine pins). The DB-9 variety is the most common in use. Serial ports are generally slow, since they send data one bit at a time over the wire. There is no standard serial cable pinout; instead, they are created for the application they are used for, such as a null-modem cable to connect two computers directly, or a modem cable to connect the computer to an external modem. The most common variety of serial cable in use today is the CISCO rollover cable, which has a nine-pin serial port on one end and an RJ-45 connector (like a network cable) on the other end. This cable is used to connect a computer to a CISCO router or switch for configuration tasks. \n 串行端口，也稱為COM或RS-232端口，在1980年代和1990年代被大量用於串行通信，作為輸入/輸出端口。 它們通常用於外部調製解調器，鼠標，軌跡球，觸摸板，繪圖儀，標籤打印機，點矩陣打印機，PDA（Palm Pilot）擴展塢，數碼相機以及PC到PC的連接。 USB已取代了現代計算機中所有這些用途的串行端口，但是有些人仍然需要串行端口。 如果您的計算機沒有串行端口（這在現代計算機中很常見），則可以使用擴展卡或USB到串行適配器添加一個。 串行端口有兩種：DB-25（包含25個引腳）和DB-9（包含9個引腳）。 DB-9品種是最常用的品種。 串口通常很慢， 因為它們一次通過電線發送數據。 沒有標準的串行電纜引出線。 相反，它們是針對用於它們的應用程序創建的，例如直接連接兩台計算機的零調製解調器電纜，或用於將計算機連接到外部調製解調器的調製解調器電纜。 當今使用的最常見的串行電纜是CISCO翻轉電纜，其一端有一個9針串行端口，而另一端有一個RJ-45連接器（如網絡電纜）。 該電纜用於將計算機連接到CISCO路由器或交換機以執行配置任務。 或調製解調器電纜將計算機連接到外部調製解調器。 當今使用的最常見的串行電纜是CISCO翻轉電纜，其一端有一個9針串行端口，而另一端有一個RJ-45連接器（如網絡電纜）。 該電纜用於將計算機連接到CISCO路由器或交換機以執行配置任務。 或調製解調器電纜將計算機連接到外部調製解調器。 當今使用的最常見的串行電纜是CISCO翻轉電纜，其一端有一個9針串行端口，而另一端有一個RJ-45連接器（如網絡電纜）。 該電纜用於將計算機連接到CISCO路由器或交換機以執行配置任務。 \n \n \n Parallel ports (並行端口) \n Parallel ports, also known as LPT (line printer terminal) ports, were used heavily in the 1980s and 1990s for parallel communication as input/output ports. They were often used for printers and scanners. USB has replaced parallel ports for all of these uses in modern computers, and few people will still have a need for a parallel port in contemporary computing. If your computer doesn’t have a parallel port (which is very common in modern machines), you could add one using an expansion card or a USB to parallel adapter. Parallel ports come in a standard DB-25 (containing 25 pins) cable. Other varieties of cables exist, including a DB-25 to Centronics 36-pin cable (common with printers), DB-25 to DB-25 cable (common with switchboxes), and DB-25 to DB-25 with the transmit/receive pins reversed (common for computer to computer connections for data transfer). Parallel ports are generally faster than serial ports, since they send data in parallel with eight bits at a time going over the wire. Parallel ports can be configured as output only or bidirectional ports. The ports are also configured as EPP (enhanced parallel port), ECP (enhanced capabilities port), and EPP/ECP. Under EPP, the port uses interrupt request (IRQ) and I/O addresses for fastest speeds. In ECP, the port can support daisy-chaining of devices and uses IRQ, I/O address, and DMA channels, and is considered resource hungry. EPP/ECP combines both modes into a single configuration, allowing for maximum compatibility. Parallel ports transmit data at up to two Mbps and receive data at 500 Kbps, which is very slow by today’s standards. \n 並行端口，也稱為LPT（行式打印機終端）端口，在1980年代和1990年代大量用於並行通信，作為輸入/輸出端口。 它們通常用於打印機和掃描儀。 USB已經取代了並行端口，可用於現代計算機中的所有這些用途，而當代計算機中仍然很少有人需要並行端口。 如果您的計算機沒有並行端口（這在現代計算機中很常見），則可以使用擴展卡或USB到並行適配器添加一個。 並行端口採用標準的DB-25（包含25針）電纜。 還存在其他各種電纜，包括DB-25至Centronics 36針電纜（與打印機共用），DB-25至DB-25電纜（與配電箱共用）， 和DB-25到DB-25，發射/接收引腳顛倒了（計算機到計算機的連接通常用於數據傳輸）。 並行端口通常比串行端口快，因為並行端口一次通過8位並行發送數據。 並行端口可以配置為僅輸出端口或雙向端口。 這些端口還配置為EPP（增強型並行端口），ECP（增強功能端口）和EPP / ECP。 在EPP下，端口使用中斷請求（IRQ）和I / O地址以獲得最快的速度。 在ECP中，端口可以支持設備的菊花鏈連接，並使用IRQ，I / O地址和DMA通道，並且被認為是資源匱乏。 EPP / ECP將兩種模式組合為一個配置，以實現最大的兼容性。 \n \n \n', 'tags': '', 'url': 'PCH 1 -\xa0Serial and Parallel Ports (串行和並行端口) P.17.html'}, {'title': 'PCH 2 - Procedures and Safety (程序與安全) P.18', 'text': '\n Introduction (介紹) 19 \n \n \n Operational Procedures: Electrical Safety ( 操作步驟：電氣安全 ) 20 \n \n \n Power Supplies ( 電源 ) 21 \n \n \n Power Variation ( 功率變化 ) 22 \n \n \n Protecting People and Property ( 保護人身和財產 ) 23 \n \n \n Operational Procedures: Electrostatic Discharge ( 操作步驟：靜電放電 ) 24 \n \n \n Operational Procedures: Environmental Controls ( 操作程序：環境控制 ) 25 \n \n \n Operational Procedures: Physical Safety ( 操作步驟：人身安全 ) 26 \n \n \n Operational Procedures: CRT Disposal ( 操作程序：CRT處置 ) 27 \n', 'tags': '', 'url': 'PCH 2 - Procedures and Safety (程序與安全) P.18.html'}, {'title': 'PCH 2 - Introduction (簡介) P.19', 'text': 'This lesson covers the basic procedures and safety precautions with which technicians must be competent and comfortable before working on various PC hardware. First we will discuss the hazards of computer systems and tools, including electricity, electrostatic discharge (ESD), chemicals, and other dangers that can hurt you when you are working on the various forms of computer hardware. We will also cover the safety measures and procedures that you must employ to minimize risk, such as using ESD straps, ESD mats, self-grounding systems, and equipment grounding. We will then discuss personal safety, including removal of jewelry to protect yourself and computers, proper lifting techniques and weight limitations, and removal of electrical power. Finally, we will cover electrical fire safety, cathode ray tube (CRT) safety and disposal, cable management, and local government regulation compliance. \n 本課程涵蓋了基本程序和安全預防措施，技術人員在使用各種PC硬件之前必須具備一定的能力和舒適度。 首先，我們將討論計算機系統和工具的危害，包括電，靜電釋放（ESD），化學物質以及在使用各種形式的計算機硬件時可能傷害您的其他危害。 我們還將介紹必須使用的安全措施和規程，以最大程度地降低風險，例如使用ESD帶，ESD墊，自接地系統和設備接地。 然後，我們將討論人身安全，包括為保護自己和計算機而移走珠寶，適當的舉陞技術和重量限制以及移去電源。 最後，我們將介紹電氣消防安全。 \n', 'tags': '', 'url': 'PCH 2 - Introduction (簡介) P.19.html'}, {'title': 'PCH 2 - Operational Procedures: Electrical Safety\xa0(操作步驟：電氣安全) p.20', 'text': '559+589+5965+5956 \n \n \n \n \n', 'tags': '', 'url': 'PCH 2 - Operational Procedures: Electrical Safety\xa0(操作步驟：電氣安全) p.20.html'}]};